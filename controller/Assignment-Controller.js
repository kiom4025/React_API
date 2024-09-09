const { getAssignmentUsingORM, createAssignmentUsingORM } = require("../service/Assignment-Service");


async function getAssignmentForTable(req, res) {
    try {
        const CoursesAvailable = await getAssignmentUsingORM();
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


async function createAssignment(req, res) {
    try {
        const Assignment = req.body;
        const newCourse = await createAssignmentUsingORM(Assignment);
        res.status(200).send("New assignment added");
    } catch (e) {
        console.log(e.message);
        res.status(400).send("Assignment Topic already exists");
        /* 
        Staus Code - 400
        Specifies - Bad Request
            As an indication that the assignment topic already present
        */
    }
}

module.exports = { getAssignmentForTable, createAssignment }