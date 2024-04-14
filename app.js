const express = require('express');
const app = express();
const mongoose=require("mongoose");
app.use(express.json())


const mongoUrl="mongodb+srv://georgemanazz:familj00@cluster0.c8jcwzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to database");
})
.catch((e) => console.log(e))


app.listen(5000,()=>{
    console.log('Server Started');
})

app.post('/post',async(req,res)=>{
    console.log(req.body);
    const {data} = req.body;

    try{
        if(data=="gogo"){
            res.send({status: "ok"})
        }else{
            res.send({  status: "User Not found" })
        }
    } catch (error) {
        res.send({status: "something went wrong try again"})
    }
    
   
})