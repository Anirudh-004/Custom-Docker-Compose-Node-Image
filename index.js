const mongoose=require("mongoose")
const express=require("express")

const app=express()

const DATABASE="mongodb://mymongo:27017/Database-app";

mongoose.
connect(DATABASE)
.then(()=>{
    console.log("Database is connected")
})
.catch(()=>{
    console.log("Error in connecting to the Database")
});


app.get("/", (req,res) =>{
    res.json({
        message:"Hello! You are visiting the world of docker."
    });
});


app.listen(8000, () =>{
    console.log("You can now get the service from the port 8000")
});