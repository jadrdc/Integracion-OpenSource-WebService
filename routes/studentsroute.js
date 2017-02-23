const router = require('express').Router();
const Student = require('../models/student');

router.post('/addStudent', function(req, res) {
    const student = new Student();
    student.nameLastName = req.body.nameLastName;
    student.id_Number = req.body.id_Number;
    student.save(
        function() {

            res.json(student);
        }
    );

});

module.exports = router;
