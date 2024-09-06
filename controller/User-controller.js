const { createUserUsingORM, getUserUsingORM } = require("../service/user-service");

async function getAllusers(req, res){
    const CoursesAvailable = await getUserUsingORM();
    res.json(CoursesAvailable);
}

async function createUser(req,res){
const Course = req.body;
    const newCourse = await createUserUsingORM(Course);
    res.json(newCourse)
}

module.exports = {getAllusers,createUser}