import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();

app.get('/health',(req, res)=>{
    res.json({
        success: true,
        message: "hiiiii"
    })
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port number = ${PORT}`);
});