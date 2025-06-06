import { Activity } from '../models/index.js'


export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll()
    res.status(200).json({ success: true, activities })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}



