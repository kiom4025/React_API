const { createUserInDB, getUserFromDB } = require("../utilitize_dto/dbConnect-User");


async function createUserUsingORM(userData) {
    var insertedCourse = await createUserInDB(userData);
    return insertedCourse;
}

async function getUserUsingORM() {
    var availableCourses = await getUserFromDB();
    return availableCourses;
}

module.exports = { createUserUsingORM, getUserUsingORM }