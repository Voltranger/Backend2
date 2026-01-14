import  dotenv  from "dotenv";
import connectDB from "./db/index.js";
import express from "express";



dotenv.config(
    {
        path:'./'
    }
)


connectDB();












/*(async()=>{
    try
    {
        await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(err)=>{throw err;})
    
    
        app.listen(process.env.PORT,()=>{
            console.log(`Server started at PORT ${process.env.PORT}`);
        });
    }
     
    catch(err)
    {
        console.error("Error:",err);
        throw(err);
    }
})()//IIFE:IMMEDIATELY INVOKED FUNCTION EXPRESSION*/