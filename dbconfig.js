require('dotenv').config();

const mongodbUri = process.env.MONGODB_URI;

module.exports = {
  mongodbUri
};
