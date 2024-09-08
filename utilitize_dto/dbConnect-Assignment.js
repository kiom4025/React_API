const AssignmentDetails = require('../models/AssignmentDetails');


async function createAssignmentInDB(data) {
  try {
    const createdUser = await AssignmentDetails.create(data);
    return createdUser;
  } catch (error) {
    console.error(error.message);
  }
}

async function getAssignmentFromDB(findQuery) {
  try {
    const CourseList = await AssignmentDetails.find({},findQuery);
    return CourseList;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { 
  createAssignmentInDB,
  getAssignmentFromDB,
};

