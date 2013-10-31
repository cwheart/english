var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/english');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var WordSchema = new Schema({
  name            : String,
  explanation     : String
});

module.exports = {
  Word: mongoose.model('Word', WordSchema)
};
