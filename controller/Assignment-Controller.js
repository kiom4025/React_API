const { getAssignmentUsingORM, createAssignmentUsingORM } = require("../service/Assignment-Service");


async function getAssignmentForTable(req, res){
    const CoursesAvailable = await getAssignmentUsingORM();
    res.json(CoursesAvailable);
}


async function createAssignment(req,res){
    const Assignment = req.body;
        const newCourse = await createAssignmentUsingORM(Assignment);
        res.json(newCourse)
}

module.exports = {getAssignmentForTable, createAssignment}