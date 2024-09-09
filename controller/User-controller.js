const { createUserUsingORM, getUserUsingORM } = require("../service/user-service");

async function getAllusers(req, res) {
    try {
        const CoursesAvailable = await getUserUsingORM();
        res.status(200).json(CoursesAvailable);
    } catch (e) {
        res.status(404).send(e.message);
        /* 
        Staus Code - 404
        Specifies - Not Found
            As an indication that the Database needs to looked at to retify this error for mostly duplicate entry
        */
    }
}

async function createUser(req, res) {
    try {
        const User = req.body;
        const newCourse = await createUserUsingORM(User);
        res.status(200).send("New user added")
    } catch (e) {
        console.log(e.message);
        res.status(400).send("User already exists");
        /* 
        Staus Code - 400
        Specifies - Bad Request
            As an indication that the user is already present
        */
    }
}

module.exports = { getAllusers, createUser }