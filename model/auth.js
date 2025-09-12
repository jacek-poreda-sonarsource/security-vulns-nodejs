var config = require("../config"),
    pgp = require('pg-promise')();


function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var test1 = "unused"

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;
