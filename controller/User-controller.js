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
                As an indication that the Database needs to looked at to retify this
            */
    }
}

async function createUser(req, res) {
    try {
        const User = req.body;
        const newCourse = await createUserUsingORM(User);
        res.status(200).json(newCourse)
    } catch (e) {
        res.status(400).send(e.message);
        /* 
        Staus Code - 400
        Specifies - Bad Request
            As an indication that the user is already present
        */
    }
}

module.exports = { getAllusers, createUser }