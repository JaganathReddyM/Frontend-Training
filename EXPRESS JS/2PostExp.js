var expr=require('express');   
var app = expr();           
var bparser = require('body-parser')     // body-parser is required to retreive data sent through POST Request
bparserinit = bparser.urlencoded({extended:false});  // Initialize body-parser

var users =[{userID:"100", firstName:"Jaganath", lastName:"Reddy"},
        {userID:"101",firstName:"Subba", lastName:"E"},
        { userID:"102",firstName:"Sathwik",lastName:"M"},
        { userID:"103",firstName:"Hitesh",lastName:"M"}];

//POST Request
function addNewUser(request, response){
    var user_id = request.body.uid;
    var first_Name = request.body.fname;
    var last_Name = request.body.lname;
    var rval=users.push({userID:user_id, firstName:first_Name, lastName:last_Name});
    response.send("<b>User Added. Total Users</b>"+rval);
}
app.post('/addUser',bparserinit,addNewUser)         // 

//  GET Request
/*function GetAllData(request, response){
    var resp = users;
    response.send(resp);
}*/
app.get("/getAll", GetAllData)


function feedback(){
    console.log("Server started on  port 8000...");
    console.log("Open the browser and visit http://localhost:8000/welcome")
}
app.listen(8000,feedback) 