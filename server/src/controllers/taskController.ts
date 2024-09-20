import { Request, Response } from 'express'
import Task from '../models/task'

const getTasks = async (req: Request,res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            error: 'Server error'
        })
    }
}
const createTask = async (req: Request,res: Response) => {
    const { title, description } = req.body;
    try {

        const newTask = new Task({title,description});
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({
            error: 'Server error'
        })
    }
}
const updateTask = async (req: Request,res: Response) => {
    const {id} = req.params;
    const { title, description, completed } = req.body;
    try {

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            {title,description,completed},
            {new: true}
        )
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            error: 'Server error'
        })
    }
}
const deleteTask = async (req: Request,res: Response) => {
    const {id} = req.params;
    try {

        await Task.findByIdAndDelete(id);
        res.status(200).json({
            msg: "task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: 'Server error'
        })
    }
}


export {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}