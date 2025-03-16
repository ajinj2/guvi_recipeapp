import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import recipeRoutes from './routes/recipeRouters.js';


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectDB();

app.use('/api', recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


