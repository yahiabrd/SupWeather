var mongoose = require("mongoose");

var citiesModel = new mongoose.Schema({
    email : {
        type: String,
        required:true
    },
    city : {
        type: String,
        required: true
    },
    temperature : {
        type: Number,
        required: true
    },
    temp_min : {
        type: Number,
        required: true
    },
    temp_max : {
        type: Number,
        required: true
    },
    weather : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cities', citiesModel);