const dotenv = require('dotenv');
dotenv.config();
/**
 * Basically this is the file through which we will get our environment variables
 */
module.exports = {
    PORT: process.env.PORT
}