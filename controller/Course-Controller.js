const { getAssignmentUsingORM } = require("../service/Assignment-Service");
const { getAvailableCourseUsingORM, createCourseUsingORM, getCourseDetailsUsingORM } = require("../service/Course-Service");

async function getAvailableCourseForCard(req, res) {
    try {
        // To get selective data using projection flags
        const CoursesAvailable = await getAvailableCourseUsingORM({
            courseTitle: 1,
            shortDescription: 1,
            difficulty: 1,
            courseDuration: 1,
            createdBy: 1,
            ratingStarValue: 1,
            reviewCount: 1,
            discountPercentage: 1,
            courseThumnail: 1
        });

        // To get all stored values
        // const CoursesAvailable = await getAvailableCourseUsingORM();
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

async function getAvailableCourseWithQuery(req, res) {
    try {
        const findquery = req.body;
        const CoursesAvailable = await getCourseDetailsUsingORM(findquery);
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

async function getCourseAssignmentForNavBar(req, res) {
    try {
        // To get selective data using projection flags
        const CoursesAvailable = await getAvailableCourseUsingORM({ courseTitle: 1 });
        const AssignmentAvailable = await getAssignmentUsingORM({ topic: 1 })
        res.status(200).send([CoursesAvailable, AssignmentAvailable]);
    } catch (e) {
        res.status(404).send(e.message);
        /* 
        Staus Code - 404
        Specifies - Not Found
            As an indication that the Database needs to looked at to retify this error for mostly duplicate entry
        */
    }
}

async function createCourse(req, res) {
    try {
        const User = req.body;
        const newCourse = await createCourseUsingORM(User);
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

module.exports = {
    getAvailableCourseForCard,
    createCourse,
    getCourseAssignmentForNavBar,
    getAvailableCourseWithQuery
}