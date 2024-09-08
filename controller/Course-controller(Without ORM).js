const { createCourseInDB_Test, getCourseFromDB_Test } = require("../service/course-service(Without ORM)")

async function getAllCourse_test(req, res) {
    const course = req.body;
    const CoursesAvailable = await getCourseFromDB_Test(course);
    res.json(CoursesAvailable);
}

async function createCourse_test(req, res) {
    const Course = req.body;
    const newCourse = await createCourseInDB_Test(Course);
    res.json(newCourse)
}

module.exports = { getAllCourse_test, createCourse_test }