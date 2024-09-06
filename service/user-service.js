const { createUserFromDB, getUserFromDB } = require("../utilitize_dto/dbConnect-ORM");


async function createUserUsingORM(courseData){
    var insertedCourse = await createUserFromDB(courseData);
    return insertedCourse;
}

async function getUserUsingORM(){
    var availableCourses = await getUserFromDB();
    return availableCourses;
}

module.exports={createUserUsingORM, getUserUsingORM}