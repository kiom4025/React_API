const { createCourseInDB, getCourseFromDB } = require("../service/course-service")

async function getAllCourse(req, res){
    const course = req.body;
    const CoursesAvailable = await getCourseFromDB(course);
    res.json(CoursesAvailable);
}

async function createCourse(req,res){
const Course = req.body;
    const newCourse = await createCourseInDB(Course);
    res.json(newCourse)
}

module.exports = {getAllCourse,createCourse}