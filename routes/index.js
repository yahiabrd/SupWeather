var express = require('express');
var router = express.Router();
var check = require("../middlewares/check");
var user = require("../models/usersModel");
//password protection
var sha1 = require('sha1');
//csrf protection
var csrf = require("csurf");
var bodyParser = require('body-parser');
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', csrfProtection, check.LoginIndex, function (req, res, next) {
  if (req.query.error) {
    var errorMsg = "";
    switch (req.query.error) {
      case "1": errorMsg = "Login/Password Error"; break;
    }
    res.render("index", { viewErrorMsg: errorMsg, page: 'Login', csrfToken: req.csrfToken() });
  } else {
    res.render('index', { page: 'Login', csrfToken: req.csrfToken() });
  }
});

router.get('/signin', csrfProtection, check.LoginIndex, function (req, res, next) {
  if (req.query.error) {
    var errorMsg = "";
    switch (req.query.error) {
      case "1": errorMsg = "Incomplete form"; break;
      case "2": errorMsg = "Bad password confirmation"; break;
      case "3": errorMsg = "This email is already existing"; break;
    }
    res.render("signin", { viewErrorMsg: errorMsg, page: 'Register', csrfToken: req.csrfToken() });
  } else if (req.query.success) {
    var successMsg = "";
    switch (req.query.success) {
      case "1": successMsg = "Your account has been successfully created"; break;
    }
    res.render("signin", { viewSuccess: successMsg, page: 'Register', csrfToken: req.csrfToken() });
  } else {
    res.render('signin', { page: 'Register', csrfToken: req.csrfToken() });
  }
});

router.post("/signin", parseForm, csrfProtection, check.LoginIndex, function (req, res) {
  session = req.session;
  if (req.body.firstname && req.body.lastname && req.body.email && req.body.password && req.body.confirmpassword) {
    if (req.body.password == req.body.confirmpassword) {
      user.findOne({ email: req.body.email }, function (err, data) {
        if (data) {
          res.redirect("/signin/?error=3");
        } else {
          var newuser = new user({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: sha1(req.body.password)
          });

          newuser.save();

          res.redirect("/signin/?success=1");
        }
      });
    } else {
      res.redirect("/signin/?error=2");
    }
  } else {
    res.redirect("/signin/?error=1");
  }
});

router.post("/login", parseForm, csrfProtection, check.LoginIndex, function (req, res) {
  session = req.session;
  user.findOne({ email: req.body.email, password: sha1(req.body.password) }, function (err, data) {
    if (data) {
      session.user = data.email;
      session.firstname = data.firstname;
      res.redirect("/home");
    } else {
      res.redirect("/?error=1");
    }
  });
});

router.get("/logout", function (req, res) {
  session = req.session;
  session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
