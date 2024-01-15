import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';

dotenv.config() 

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to Mongodb');
}).catch((err)=>{
    console.log(err)
});

const app = express();

app.listen(3000,()=>{
    console.log(`server listening on port 3000`)
}) 
app.use('/api/user',userRouter)
// app.get('/',(req,res)=>{
//     res.json({
//         message:"API is working"
//     })
// })
