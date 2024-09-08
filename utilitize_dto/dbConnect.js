const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertIntodb(data) {
  try {
    await client.connect();
    const database = client.db(data.database); // Replace with your database name
    const collection = database.collection(data.collection); // Replace with your collection name
    console.log('Connected to MongoDB');
    const result = await collection.insertOne(data.dataToinsert);
    return result;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
    console.log('MongoDB Disconnected');
  }
}

async function getFromDB(data) {
  try {
    await client.connect();
    const database = client.db(data.database); // Replace with your database name
    const collection = database.collection(data.collection); // Replace with your collection name
    console.log('Connected to MongoDB');
    const result = await collection.find({}).toArray();
    return result;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
    console.log('MongoDB Disconnected');
  }
}

module.exports = { insertIntodb, getFromDB };

