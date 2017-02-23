const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    nameLastName: String,
    id_Number: String
});

module.exports = mongoose.model('Students', StudentSchema);
