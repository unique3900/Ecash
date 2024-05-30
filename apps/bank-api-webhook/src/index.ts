import express  from "express";

const app=express();

app.get('/',(req,res)=>[
    res.json({status:400,message:"Test running"})
])

app.post('/net-bank-nepal-service',(req,res)=>{
    const {token,userId,amount}=req.body;
    if(!token||!userId||!amount){
        res.status(404).json({success:false,message:"Invalid payment details"})
    }
})
app.listen(8080,()=>{
    console.log("Server Running on port 8080")
})