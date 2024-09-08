var express = require('express');
const { createCourse_test, getAllCourse_test } = require('../controller/Course-controller(Without ORM)');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Course Route (Without ORM)");
    next();
});

router.get('/', getAllCourse_test);
router.post('/', createCourse_test);

module.exports = router;



/* 
Postman input to check these Routes functionality is as follows,

1. Post: http://localhost:8000/courses

    Body:
        {
            "database":"LMS-Fullstack_Assignment",
            "collection":"course_test",
            "dataToinsert":{
                "course_id":"0001",
                "course_name":"Full Stack",
                "Course Description":"short Description of Full Stack"
            }
        }

    Response:
        {
            "acknowledged": true,
            "insertedId": "66da66d2da64e4fccdd8d33b"
        }

    Explanation:
        - The structure of the body is based on the function structure inside the "dbConnect.js" file.
        - When the "database" or "collection" is changed in the body of the post request, 
        the corresponding database or collection that doesn't exist in the Mongodb is created automatically 
        and acknowledgement is sent back as response.

2. Get: http://localhost:8000/courses

    Body:
        {
            "database":"LMS-Fullstack_Assignment",
            "collection":"course_test",
            "dataToinsert":{
                "course_id":"0001",
                "course_name":"Full Stack",
                "Course Description":"short Description of Full Stack"
            }
        }

        (or)

        {
            "database":"LMS-Fullstack_Assignment",
            "collection":"course_test"
        }

    Response: Array of object that are available in the given database and collection.

    Explanation:
        - For both above mentioned body of GET request provides the list of all the available courses inside the "course_test" collection.
        Because the "dbConnect.js" file inside the "utilitize_dto" folder requires only the "database" & "collection".
        Then the corresponding collection's data is sent back as response like a array of objects.
        If the "collection" or "database" doesn't exist then an empty array is returned back

*/