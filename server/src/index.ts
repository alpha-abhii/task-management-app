import express from 'express';
import dotenv from "dotenv";

dotenv.config();

import connectDB from './config/db';
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Task Manager API');
})

import taskRoutes from './routes/taskRoutes';
app.use('/api',taskRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})