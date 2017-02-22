const express= require('express');
const parameters=require('./config/parameter');
const bodyParser= require('body-parser');
const routeproduct =require('./routes/productsroute');
const routestudent =require('./routes/studentsroute');
const transactionroute =require('./routes/transactionroute');


const app= new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(routeproduct);
app.use(routestudent);
app.use(transactionroute);

app.listen(parameters.port,function(req,resp)
{
  parameters.db.connect(parameters.connection);

  console.log('Hello World');
});
