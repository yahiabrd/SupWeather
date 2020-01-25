var express = require('express');
var router = express.Router();
var check = require("../middlewares/check");
var city = require("../models/citiesModel");
var request = require('request');
var { getCode, getName } = require('country-list');
//csrf protection
var csrf = require("csurf");
var bodyParser = require('body-parser');
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', csrfProtection, check.LoginHome, function (req, res, next) {
    var email = req.session.user;
    var firstname = req.session.firstname;
    var infosCity = [];

    city.find({ email: req.session.user }, function (err, data) {
        if (err) {
            throw err;
        }
        if (data.length != 0) {
            for (var i = 0; i < data.length; i++) {
                infosCity.push(data[i]);
            }
        }

        if (req.query.error) {
            var errorMsg = "";
            switch (req.query.error) {
                case "1": errorMsg = "Incomplete form"; break;
                case "2": errorMsg = "Error..."; break;
                case "3": errorMsg = "City not found"; break;
                case "4": errorMsg = "This city has been already added"; break;
                case "5": errorMsg = "You didn't added this city"; break;
            }
            res.render('home', { viewErrorMsg: errorMsg, csrfToken: req.csrfToken(), page: 'Home', status: 'Login', login: email, name: firstname, city: infosCity });
        } else if (req.query.success) {
            var successMsg = "";
            switch (req.query.success) {
                case "1": successMsg = "This city has been successfully added"; break;
                case "2": successMsg = "This city has been successfully deleted"; break;
                case "3": successMsg = "This city has been successfully updated"; break;
            }
            res.render('home', { viewSuccess: successMsg, csrfToken: req.csrfToken(), page: 'Home', status: 'Login', login: email, name: firstname, city: infosCity });
        } else {
            res.render('home', { csrfToken: req.csrfToken(), page: 'Home', status: 'Login', login: email, name: firstname, city: infosCity });
        }
    }).sort({ _id: -1 });
});

router.get('/deleteCity/:id', check.LoginHome, function (req, res, next) {
    if (req.params.id) {
        city.findByIdAndDelete({ _id: req.params.id }, function (err, data) {
            res.redirect("/home/?success=2");
        });
    }
});

router.get('/updateCity/:name', check.LoginHome, function (req, res, next) {
    if (req.params.name) {
        var key = "64a8e13502e47c84bdedd706c3e67ec9";
        request({ url: 'http://api.openweathermap.org/data/2.5/weather?q=' + req.params.name + '&APPID=' + key + '&units=metric', json: true }, function (err, ress, json) {
            if (err) {
                throw err;
            } else {
                city.findOneAndUpdate({ city: json["name"] }, {
                    temperature: Math.round(json["main"].temp),
                    temp_min: Math.round(json["main"].temp_min),
                    temp_max: Math.round(json["main"].temp_max),
                    weather: json["weather"][0].main

                }, function (err, data) {
                    res.redirect("/home/?success=3");
                });
            }
        });
    }
});

router.post("/addCity", parseForm, csrfProtection, check.LoginHome, function (req, res) {
    if (req.body.city) {
        var cityCapitalized = req.body.city.charAt(0).toUpperCase() + req.body.city.slice(1);
        city.findOne({ email: req.session.user, city: cityCapitalized }, function (err, data) {
            if (data) {
                res.redirect("/home/?error=4");
            } else {
                var key = "64a8e13502e47c84bdedd706c3e67ec9";
                var country = req.body.city;

                request({ url: 'http://api.openweathermap.org/data/2.5/weather?q=' + country + '&APPID=' + key + '&units=metric', json: true }, function (err, ress, json) {
                    if (err) {
                        throw err;
                    } else {
                        if (json["cod"] == "404") {
                            res.redirect("/home/?error=3");
                        } else if (json["cod"] == "200") {

                            var newCity = new city({
                                email: req.session.user,
                                city: json["name"],
                                temperature: Math.round(json["main"].temp),
                                temp_min: Math.round(json["main"].temp_min),
                                temp_max: Math.round(json["main"].temp_max),
                                weather: json["weather"][0].main
                            });

                            newCity.save();

                            res.redirect("/home/?success=1");

                        } else {
                            res.redirect("/home/?error=2");
                        }
                    }
                });
            }
        });
    } else {
        res.redirect("/home/?error=1");
    }
});

router.get('/details/:name', check.LoginHome, function (req, res, next) {
    var email = req.session.user;
    var firstname = req.session.firstname;
    if (req.params.name) {
        var cityCapitalized = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
        city.findOne({ email: req.session.user, city: cityCapitalized }, function (err, data) {
            if (!data) {
                res.redirect("/home/?error=5");
            } else {
                var key = "64a8e13502e47c84bdedd706c3e67ec9";
                var country = req.params.name;

                request({ url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + country + '&mode=json&units=metric&appid=' + key, json: true }, function (err, ress, json) {
                    if (err) {
                        throw err;
                    } else {
                        var _country = getName(json["city"].country);

                        tab = [];
                        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                        try {
                            //boucle qui va permettre d'ajouter les donnees du json
                            for (var i = 0; i < json.list.length; i = i + 8) {
                                tab.push([
                                    json.list[i].weather[0].main,
                                    Math.round(json.list[i].main.temp),
                                    Math.round(json.list[i].main.temp_min),
                                    Math.round(json.list[i].main.temp_max),
                                    json.list[i].dt_txt
                                ]);
                            }

                            //pour recup les jours en fonction de la date
                            var tabDays = [];
                            for (var i = 0; i < tab.length; i++) {
                                var date = new Date(tab[i][4]);
                                tabDays.push(days[date.getDay()]);
                            }
                            res.render('details', {
                                page: 'Forecast',
                                status: 'Login',
                                login: email,
                                name: firstname,
                                infosWeek: tab,
                                days: tabDays,
                                city: req.params.name,
                                country: _country
                            });

                        } catch (e) {
                            res.redirect("/home/?error=2");
                        }
                    }
                });
            }
        });
    }
});


module.exports = router;
