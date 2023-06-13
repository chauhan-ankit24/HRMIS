import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000


const URL = "mongodb://localhost:27017/cdacsample";
mongoose.connect(URL);

app.use('/', userRoutes);

app.listen(PORT, () => console.log(`server running at Port : ${PORT}`));