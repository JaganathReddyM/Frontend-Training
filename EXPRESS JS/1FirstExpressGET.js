
var expr=require('express');   //import expressjs by using "require"
var app = expr();           // Initialize expressjs environment
                                                                
var users =[{userID:"100", firstName:"Jaganath", lastName:"Reddy"},
        {userID:"101",firstName:"Subba", lastName:"E"},
        { userID:"102",firstName:"Sathwik",lastName:"M"},
        { userID:"103",firstName:"Hitesh",lastName:"M"}];
//http://localhost:8800/getuser?uid=101  ...to execute we need pass values as parameters
//http://localhost:8800/getuser?uid=101&fname=Jaganath

function RetrieveUser(request, response){
    var status = false;
    var userid=request.query.uid;   // whatever the userid that client is sending, that is storedin this variable
    var firstName = request.query.fname;
    for( var user of users){
        if(userid == user.userID  && firstName ==  user.firstName){
            status=true;  
            break;}
    }
    if(status)
        response.send(user);
    else
        response.end("<b>No employee with ID</b>"+userid);
}
app.get("/getUser",RetrieveUser)     // 1)get user data by id
//
function GetAllData(request, response){
    var resp = users;
    response.send(resp);
}
app.get("/getAll", GetAllData)
//
function DeleteUser(request,response){
    var userid = request.query.uid;
    var indexToDelete = -1; // Initialize to -1, indicating the user is not found.
    for (var i = 0; i < users.length; i++) {
        if (userid === users[i].userID) {
            indexToDelete = i;
            break;
        }
    }
    if (indexToDelete !== -1) {
        // User found, delete them from the 'users' array.
        var deletedUser = users.splice(indexToDelete, 1);
        response.send(deletedUser[0]); // Send the deleted user as a response.
    } else {
        response.status(404).send("No user with the given ID found.");
    }
}
app.get("/deleteById",DeleteUser)
//
function Home(request, response){
    var resp ="<html><body><b>WELCOME to our site....<br><br>";
    resp += "<a href=/welcome> Welcome Page</a></body></html>";
    response.end(resp);            // end function also sends the response ...send also
}
app.get('/',Home)     // if it end with slash, then the function called Home
//
var visitorCount=0;
function Welcome(request, response){
    var today = new Date();
    visitorCount++;
    var resp = "<html><body><b>Today : " + today;
    resp +="<b><br><b>Visitor Count</b> : "+visitorCount;
    resp +="</body></html>";
    response.send(resp)
}
// function takes 2 parameters , request represents the HTTP request 
// response represents he HTTP response packet contains the data what the server sends
app.get('/welcome',Welcome);   // get request... Parameters - /welcome means implenting API & Welcome is Action

//here this function code is a Node Js code .....we can run by using "node filename"  Ex: node FirstExpress.js  
function feedback(){
    console.log("Server started on  port 8800...");
    console.log("Open the browser and visit http://localhost:8800/welcome")
}
app.listen(8800,feedback)   // listen have so many variations,...parameters - port number & function

