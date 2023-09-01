require('dotenv').config();

const mongodbUri = process.env.mongodbUri;

module.exports = {
  mongodbUri
};
