var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 150},
    surname: {type: String, required: true, maxlength: 200},
    password: {type: String, required: true, maxlength: 100},
    totalHave:{type: Number, required: true},
    totalSpend:{type: Number, required: true}
  }, { versionKey: false }
);

//Export model
module.exports = mongoose.model('User', UserSchema);