const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.status(200).json({message: "Hey bro, We are changing things to suite our needs"})
})

app.listen(3000, ()=>{
    console.log("server is running")
})

