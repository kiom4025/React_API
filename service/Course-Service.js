const { getAvailableCourseFromDB, createCourseInDB } = require("../utilitize_dto/dbConnect-Course");


async function getAvailableCourseUsingORM(findQuery){
    var availableCourses = await getAvailableCourseFromDB(findQuery);
    return availableCourses;
}

async function createCourseUsingORM(CourseData){
    var insertedCourse = await createCourseInDB(CourseData);
    return insertedCourse;
}

module.exports={getAvailableCourseUsingORM, createCourseUsingORM}