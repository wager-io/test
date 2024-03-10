const express = require("express")
const serverless = require("serverless-http")
const app = express()
const router = express.Router()

router.get("/", (req, res)=>{
    res.status(200).json({message: "Hey bro, We are changing things to suite our needs"})
})



app.use("/.netlify/functions/api", router)
module.exports.handler = serverless(app)