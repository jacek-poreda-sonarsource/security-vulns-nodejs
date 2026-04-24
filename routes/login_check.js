
function check_logged(req, res) {

    if (!req.session.logged)
    {
        res.redirect("/login?returnurl=" + req.url);
    }
}

module.exports = check_logged;