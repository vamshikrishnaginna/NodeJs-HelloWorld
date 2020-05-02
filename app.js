const express = require('express')
const app = express()
const PORT = 5000


app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/about',customMiddleware,(req,res)=>{
    console.log("about")
    res.send("About page")
})
app.listen(PORT,()=>{
    console.log("server is running on", PORT)
})