const mongoose=require('mongoose');
require('mongoose-double')(mongoose);

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
student : {type : Schema.Types.ObjectId, ref :'Students'},
academic_program : { type : Schema.Types.ObjectId , ref : 'Products'},
academic_period : String,
amount : Schema.Types.Double
});

module.exports=mongoose.model('Transactions',TransactionSchema);
