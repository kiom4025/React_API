const bcrypt = require('bcrypt');
const { createUserInDB, getUserFromDB } = require("../utilitize_dto/dbConnect-User");


async function createUserUsingORM(userData) {

    password = await bcrypt.hash(userData.phone, 10); // Hash the user's password
    // Default userData.phone given in development is 987654321

    var updatedUser = { ...userData, phone: password };
    var insertedCourse = await createUserInDB(updatedUser);
    return insertedCourse;
}

async function getUserUsingORM() {
    var availableCourses = await getUserFromDB();
    return availableCourses;
}

module.exports = { createUserUsingORM, getUserUsingORM }