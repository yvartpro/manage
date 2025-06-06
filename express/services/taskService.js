import Log from '../models/Log.js'
import Task from '../models/Task.js'
import sequelize from '../config/db.js'

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      limit: 6,
      order: [['start_date', 'DESC']],
      include: { association: 'activity' }
    })
    res.status(200).json({ success: true, tasks })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}


export const getTasksWithUsers = async (req, res) => {
  try {
    const [tasks] = await sequelize.query(`
     SELECT
      t.id AS task_id,
      t.title AS title,
      t.start_date AS start,
      t.status AS status,
      t.end_date AS end,
      COUNT(u.id) AS user_count,
      GROUP_CONCAT(u.fname SEPARATOR ', ') AS user_names
     FROM task t
      LEFT JOIN task_user tu ON tu.task_id = t.id
      LEFT JOIN user u ON tu.user_id = u.id WHERE t.start_date >= CURDATE()
      GROUP BY t.id, t.title, t.start_date, t.status, t.end_date
      ORDER BY t.start_date LIMIT 6
    `)

    res.json(tasks)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
}


export const getTaskActs = async (req, res)=>{
  try {
    const [tasks] = await sequelize.query(`
      SELECT
       t.id AS task_id,
       t.title AS title,
       t.start_date AS start,
       t.status AS status,
       t.end_date AS end,
       a.id AS activity,
       COUNT(u.id) AS user_count,
       GROUP_CONCAT(u.fname SEPARATOR ', ') AS user_names
      FROM task t
       LEFT JOIN task_user tu ON tu.task_id = t.id
       LEFT JOIN user u ON tu.user_id = u.id
       LEFT JOIN activity a ON t.activity_id = a.id
       WHERE a.id = :activity_id
       GROUP BY t.id, t.title, t.start_date, t.status, t.end_date
       ORDER BY t.start_date"
     `)
    res.json(tasks)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
}


export const getLogs = async (req, res) => {
  try {
    const logs = await Log.findAll({
      where: { user_id: req.user.id },
    })
    res.status(200).json({ success: true, logs })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}
