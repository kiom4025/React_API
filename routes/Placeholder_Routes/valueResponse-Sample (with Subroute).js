var express = require('express');
var router = express.Router();

// editCourses
// editAssignment

// get method for parent route
router.get('/',(req, res)=>{
    // 1- To return a string
    // res.send("post method called")
    
    // 2- To return an array
    res.json({
        messageTitle:"Hi",
        message:"get method called"
    })
})

// post method for parent route
router.post("/", (req,res)=>{
    // 1- To return a string
    res.send("post method called")
    
    // 2- To return an array
    // res.json({
    //     messageTitle:"Hi",
    //     message:"Post method called"
    // })
})


// get method for sub route
router.get('/editAssignment',(req, res)=>{
    // 1- To return a string
    // res.send("post method called")
    
    // 2- To return an array
    res.json({
        messageTitle:"Hi",
        message:"get method called"
    })
})

// get method for another sub route
router.get('/editAssignment',(req, res)=>{
    // 1- To return a string
    // res.send("post method called")
    
    // 2- To return an array
    res.json({
        messageTitle:"Hi",
        message:"get method called"
    })
})

module.exports = router;