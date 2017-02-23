const router = require('express').Router();
const TransactionModel = require('../models/transaction');
const EducationTypeModel = require('../models/educationproduct');
const StudentModel = require('../models/student');
const synchOperation = require('async');




router.post('/addTransaction', function(req, res) {

    synchOperation.waterfall([
        function(callback) {
            const student = new StudentModel();
            student.nameLastName = req.body.nameLastName;
            student.id_Number = req.body.id_Number;
            student.save(function() {
                callback(null, student);
            });
        },

        function(data, callback) {
            const transaction = new TransactionModel();
            transaction.amount = req.body.amount;
            transaction.student = data._id,
            transaction.studentid=req.body.id_Number,
            transaction.academic_program = req.body.academic_program;
            transaction.academic_period = req.body.academic_period;
            transaction.save(function() {
            //    res.json(transaction);

            });

            callback(null);
        }
    ], function(err, result) {

        if (err) {
            console.log(err)
        } else {
res.redirect('/');
        }
    });



});


router.get('/', function(req, res) {
    EducationTypeModel.find({}, function(err, educationType) {
        res.render('transaction/addTransaction', {
            educationmodel: educationType
        });
    });
});

router.get('/add', function(req, res) {
    EducationTypeModel.find({}, function(err, educationType) {
        res.render('transaction/addTransaction', {
            educationmodel: educationType
        });
    });
});







router.get('/getTransaction/:student', function(req, res) {
    TransactionModel.findOne({
            studentid: req.params.student
        })
        .populate('student', 'nameLastName').populate('academic_program', 'description')
        .exec(function(err, transaction) {
            res.json(transaction);
        });
});






module.exports = router;
