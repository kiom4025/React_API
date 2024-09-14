var express = require('express');
var router = express.Router();

// Prefix to add to each of the uploaded file
var d = new Date();
var filenamePrefix = d.getFullYear() + " " + (d.getMonth() + 1) + " " + d.getDate() + "(" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + "." + d.getMilliseconds() + ")";


// Multer for multi-part upload
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploadedfiles/');
    },
    filename: (req, file, cb) => {
        cb(null, filenamePrefix + '-' + file.originalname);
        // cb(null, file.originalname);
    },

});
const fileupload = multer({ storage });


/* // app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Assignment upload Route");
    next();
}); */


router.use('/', fileupload.array('file', 4), (req, res) => {
    // console.log(req);
    //file processing
    return res.send("File uploaded");
})

module.exports = router;