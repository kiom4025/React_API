const { getAvailableCourseFromDB, createCourseInDB, getCourseDetailsFromDB } = require("../utilitize_dto/dbConnect-Course");


async function getAvailableCourseUsingORM(findQuery){
    var availableCourses = await getAvailableCourseFromDB(findQuery);
    return availableCourses;
}

async function getCourseDetailsUsingORM(findQuery){
    var availableCourses = await getCourseDetailsFromDB(findQuery);
    return availableCourses;
}

async function createCourseUsingORM(CourseData){
    var insertedCourse = await createCourseInDB(CourseData);
    return insertedCourse;
}

module.exports={
    getAvailableCourseUsingORM, 
    createCourseUsingORM,
    getCourseDetailsUsingORM
}