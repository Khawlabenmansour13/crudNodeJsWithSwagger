

const mongoose = require('mongoose');


var Schema = mongoose.Schema;


var Contact = new Schema({


    FullName : String,
    Phone: String, 
    Email: String
});


module.exports = mongoose.model('contact', Contact);

