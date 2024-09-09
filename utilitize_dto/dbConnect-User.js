const { Error } = require('mongoose');
const Users = require('../models/userLogin');

async function createUserInDB(data) {
  try {
    const createdUser = await Users.create(data);
    return createdUser;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getUserFromDB() {
  try {
    const userList = await Users.find();
    return userList;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

module.exports = {
  createUserInDB,
  getUserFromDB
};

