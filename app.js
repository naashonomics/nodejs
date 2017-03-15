var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
var port = 8080;

//example1
var url="http://google.com";
request(url,function(err,resp,body){
   if(err) {
       console.log(err);
    } else {
         console.log(body);
    }   
   
});
app.listen(port,function(){
  console.log('app listening on port' + port );
}) 
