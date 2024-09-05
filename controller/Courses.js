

function getCourse(req, res){
    // 1- To return a string
    // res.send("post method called")
    
    // 2- To return an array
    res.json({
        messageTitle:"Hi",
        message:"get method called in courses"
    })
}

function createCourse(req,res){
        // 1- To return a string
    // res.send("post method called")
    
    // 2- To return an array
    res.json({
        messageTitle:"Hi",
        message:"post method called in courses"
    })
}

module.exports = {getCourse,createCourse}