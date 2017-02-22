const router = require('express').Router();
const TransactionModel= require('../models/transaction');

router.post('/addTransaction',function(req,res) {
 const transaction = new TransactionModel();
       transaction.amount=req.body.amount;
       transaction.student=req.body.student;
       transaction.academic_program=req.body.academic_program;
       transaction.academic_period =req.body.academic_period;
       transaction.save(function()
     {
       res.json(transaction);

     });
});

router.get('/getTransaction/:student',function(req,res)
{
TransactionModel.findOne({student:req.params.student})
.populate('student','nameLastName').populate('academic_program','description')
.exec(function(err,transaction)
{
  res.json(transaction);
});
}
);






module.exports=router;
