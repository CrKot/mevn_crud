import Task from '../models/index.mjs';

class TaskController {
  getTasks = async (_req, res) => {
    try {
      const tasks = await Task.find();
      return res.send(tasks);
    } catch (err) {
      return res.send(err);
    }
  }

  addTask = async (req, res) => {
    const { name, description } = req.body;
    const newTask = { name, description, date: new Date() };
    try {
      const task = await Task.create(newTask);
      return res.send(task);
    } catch (err) {
      return res.send(err);
    }
  }

  editTask = async (req, res) => {
    const objectId = { _id: req.params.id };
    if (!req.body.name || !req.body.description) {
      return res.send({ error: 'new task is empty' });
    }
    try {
      const task = await Task.findOne(objectId);
      task.name = req.body.name;
      task.description = req.body.description;
      await task.save();
      return res.send(task);
    } catch (err) {
      return res.send(err);
    }
  }

  deleteTask = async (req, res) => {
    const { id } = req.params;
    const objectId = { _id: id };
    try {
      await Task.deleteOne(objectId);
      return res.send(`Task ${id} deleted`);
    } catch (err) {
      return res.send(err);
    }
  }

  deleteAll = async (_req, res) => {
    try {
      await Task.deleteMany({});
      return res.send('Success');
    } catch (err) {
      return res.send(err);
    }
  }
}

export default TaskController;
