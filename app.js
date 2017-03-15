var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
var port = 8081;

//example1 - google.com output in html 
var url="http://google.com";
request(url,function(err,resp,body){
   if(err) {
       console.log(err);
    } else {
         console.log(body);
    }   
   
});

//example2  - save google.com locally
var url= "http://google.com";
var destination = fs.createWriteStream('./downloads/google2.html');
request(url)
.pipe(destination);
 
app.listen(port,function(){
  console.log('app listening on port' + port );
}) 
