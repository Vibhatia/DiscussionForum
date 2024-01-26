import dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
    console.error(result.error);
}
import express from 'express';
import 'colors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js'
import cors from 'cors';
const app = express();
app.use(express.json()); // for parsing application/json
app.use(cors());
app.get('/test',(req,res)=>{
    res.send("TEST");
})

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/post',postRoutes);

const PORT = process.env.PORT || 5000;


const start= async ()=>{
    try {
        await connectDB(process.env.MONGO_URI_PROD)
        app.listen(PORT,()=>{
            console.log(`Server started on port ${PORT}`.yellow.bold);
            console.log("MongoDB Connected".green.bold);
        })
    } catch (error) {
        console.log(`Error:${error.message}`.red.bold);
    }
}

start();