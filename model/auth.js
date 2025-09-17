var config = require("../config"),
    pgp = require('pg-promise')();


function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    var unused1 = "123"

    var unused2 = "123"

    var unused3 = "123"

    var unused5 = "123"

    var unused4 = "123"

    var unused6 = "123"

    var unused7 = "123"

    var unused8 = "123"

    var unused9 = "123"

    var unused10 = "123"

    return db.one(q);
}

module.exports = do_auth;
