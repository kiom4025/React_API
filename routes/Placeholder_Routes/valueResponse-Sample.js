var express = require('express');
var router = express.Router();

router.get('/',(req, res)=>{
    // 1- To return a string
    // res.send("post method called")
    
    // 2- To return an array
    res.json({
        messageTitle:"Hi",
        message:"get method called"
    })
})

router.post("/", (req,res)=>{
    // 1- To return a string
    res.send("post method called")
    
    // 2- To return an array
    // res.json({
    //     messageTitle:"Hi",
    //     message:"Post method called"
    // })
})

module.exports = router;