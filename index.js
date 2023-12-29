import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();

const screatkey="secreatkey"

app.get('/health',(req, res)=>{
    res.json({
        success: true,
        message: "hiiiii"
    })
})


app.post('/login',(req, res)=>{
    const user ={
        id:1,
        username: "Anand",
        email: "anand@gmail.com"
    }
    jwt.sign({user},screatkey, {expiresIn: '300s'}, (err, token)=>{
        res.json({
            token
        })
    })
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port number = ${PORT}`);
});