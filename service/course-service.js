const { insertIntodb, getFromDB } = require("../utilitize_dto/dbConnect");


async function createCourseInDB(courseData){
    var insertedCourse = await insertIntodb(courseData);
    return insertedCourse;
}

async function getCourseFromDB(courseData){
    var availableCourses = await getFromDB(courseData);
    return availableCourses;
}

module.exports={createCourseInDB, getCourseFromDB}