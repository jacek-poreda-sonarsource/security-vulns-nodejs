var config = require("../config"),
    pgp = require('pg-promise')();


function do_auth(username, password) {
    var test = "Unused"

    var test1 = "Unused"

    var test2 = "Unused"

    var test3 = "Unused"

    var test4 = "Unused"

    var test5 = "Unused"

    var test6 = "Unused"

    var test7 = "Unused"

    var test8 = "Unused"
    
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;
