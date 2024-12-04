const bcrypt = require('bcryptjs')

const users = [
    {
        name: "Admin",
        email: "admin@adonnies.com",
        password: bcrypt.hashSync("1234", 10),
        isAdmin: true,
    },

    {
        name: "User",
        email: "user@adonnies.com",
        password: bcrypt.hashSync("1234", 10),

    },
];

module.exports = users;