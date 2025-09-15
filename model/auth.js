var config = require("../config"),
    pgp = require('pg-promise')();


function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    var blablab = '123'

    var unused = '123'


    var unused1 = '123'

    var unused2 = '123'
    
    return db.one(q);
}

module.exports = do_auth;
