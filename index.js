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
    jwt.sign({user},screatkey, {expiresIn: '3000s'}, (err, token)=>{
        res.json({
            token
        })
    })
})

app.post("/profile",verifyToken,(req, res)=>{
    jwt.verify(req.token, screatkey, (err,authData)=>{
        if(err){
            err.send({result: "Invalid Token"})
        }
        else{
            res.json({
                message:"profile accessed",
                authData
            })
        }
    })
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token=token;
        next();
    }else{
        res.send({
            result: "Token is not valid"            
        })
    }
}

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port number = ${PORT}`);
});