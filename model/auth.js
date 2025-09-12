var config = require("../config"),
    pgp = require('pg-promise')();


function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var etsdtsdt = " unused"

    var etsdtsdt2 = " unused"

    var etsdtsdt3 = " unused"



    var etsdtsdt4 = " unused"


    var etsdtsdt5 = " unused"

    var etsdtsdt6 = " unused"

    var etsdtsdt7 = " unused"

    var etsdtsdt8 = " unused"
    
    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;
