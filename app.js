let express = require('express');
let record=express();
 record.listen(2500,function(){
   console.log(2500,'pharmasutical company');
 });

 record.use(express.json());
 record.get('/getUser',function(req,res){
     res.send("your data sucessfully on our company");
 });
 record.get('/getemploye',function(req,res){
    res.send('sucess');
 });

 record.post('/createUser',function(req,res){
  res.send("chaitanya");
});