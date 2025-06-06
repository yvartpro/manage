import User from './User.js'
import Activity from './Activity.js'
import Task from './Task.js'
import Log from './Log.js'

// user-activity
User.hasMany(Activity, {
  foreignKey: 'created_by',
  as: 'activities'
})
Activity.belongsTo(User, {
  foreignKey: 'created_by',
  as: 'creator'
})

//task-activity
Activity.hasMany(Task, {
  foreignKey: 'activity_id',
  as: 'tasks'
})
Task.belongsTo(Activity, {
  foreignKey: 'activity_id',
  as: 'activity'
})

//user-task
Task.belongsToMany(User, {
  through: 'task_user'
})
User.belongsToMany(Task, {
  through: 'task_user'
})

//logs-user-task
Log.belongsTo(User, {
  foreignKey: 'user_id'
})
Log.belongsTo(Task, {
  foreignKey: 'task_id'
})
User.hasMany(Log, {
  foreignKey: 'user_id',
})
User.hasMany(Task, {
  foreignKey: 'task_id',
})

export { User, Activity, Task, Log }
