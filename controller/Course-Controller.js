const { getAssignmentUsingORM } = require("../service/Assignment-Service");
const { getAvailableCourseUsingORM, createCourseUsingORM, getCourseDetailsUsingORM } = require("../service/Course-Service");

async function getAvailableCourseForCard(req, res){
    // To get selective data using projection flags
    const CoursesAvailable = await getAvailableCourseUsingORM({
        courseTitle:1, 
        shortDescription:1, 
        difficulty:1,
        courseDuration:1,
        createdBy:1,
        ratingStarValue:1,
        reviewCount:1,
        discountPercentage:1,
        courseThumnail:1
    });

    // To get all stored values
    // const CoursesAvailable = await getAvailableCourseUsingORM();
    res.json(CoursesAvailable);
}

async function getAvailableCourse(req, res){
    const findquery = req.body;
    const CoursesAvailable = await getCourseDetailsUsingORM(findquery);
    res.json(CoursesAvailable);
}

async function getCourseAssignmentForNavBar(req, res){
    // To get selective data using projection flags
    const CoursesAvailable = await getAvailableCourseUsingORM({ courseTitle:1 });
    const AssignmentAvailable = await getAssignmentUsingORM({ topic:1 })
    res.send([CoursesAvailable,AssignmentAvailable]);
}

async function createCourse(req,res){
    const User = req.body;
        const newCourse = await createCourseUsingORM(User);
        res.json(newCourse)
}

module.exports = {
    getAvailableCourseForCard, 
    createCourse, 
    getCourseAssignmentForNavBar,
    getAvailableCourse
}