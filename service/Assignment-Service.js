const { getAssignmentFromDB, createAssignmentInDB } = require("../utilitize_dto/dbConnect-Assignment");


async function getAssignmentUsingORM(findQuery) {
    var availableAssignment = await getAssignmentFromDB(findQuery);
    return availableAssignment;
}

async function createAssignmentUsingORM(AssignmentData) {
    var insertedAssignment = await createAssignmentInDB(AssignmentData);
    return insertedAssignment;
}

module.exports = { getAssignmentUsingORM, createAssignmentUsingORM }