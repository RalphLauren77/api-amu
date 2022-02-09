require('dotenv').config();

module.exports = {
    // prettier-ignore

    DB_URL: process.env.DB_URL || 'http://localhost:5000',

    ALLOWED_ORIGIN:
        process.env.ALLOWED_ORIGIN
        || 'http://localhost:4200;http://localhost:3000;http://localhost:5000',
};
