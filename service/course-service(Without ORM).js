const { insertIntodb, getFromDB } = require("../utilitize_dto/dbConnect");


async function createCourseInDB_Test(courseData){
    var insertedCourse = await insertIntodb(courseData);
    return insertedCourse;
}

async function getCourseFromDB_Test(courseData){
    var availableCourses = await getFromDB(courseData);
    return availableCourses;
}

module.exports={createCourseInDB_Test, getCourseFromDB_Test}