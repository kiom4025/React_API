const CourseDetails = require('../models/CourseDetails');


async function createCourseInDB(data) {
  try {
    const createdUser = await CourseDetails.create(data);
    return createdUser;
  } catch (error) {
    console.error(error.message);
  }
}

async function getAvailableCourseFromDB(findQuery) {
  try {
    const CourseList = await CourseDetails.find({},findQuery);
    return CourseList;
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourseDetailsFromDB(findQuery) {
  try {
    const CourseList = await CourseDetails.find(findQuery);
    return CourseList;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { 
  createCourseInDB,
  getAvailableCourseFromDB,
  getCourseDetailsFromDB
};

