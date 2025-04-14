var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New York","San Francisco","Tokyo", "Delhi", "Gurugram"]}
var text1 = makeid(40);
var text2 = text1+ " "+makeid(40);
var text3 = text2+ " "+makeid(40);
var text4 = text3+ " "+makeid(40);
var logs = ["i 1", "am 1", "here 1", "hello 1", "and 1", "you 1", "know 1", "who 1", "i 2", "am 2", "here 2", "hello 2", "hello 2", "and 2", "you 2", "know 2", "who 2", "i 3", "am 3", "here 3", "hello 3", "and 3", "hello 3", "and 3", "you 3", "know 3", "who 3", "i 4", "am 4", "here 4", "hello 4", "and 4", "we 4", "hello 4", "and 4", "you 4", "know 4", "who 4", "i 5", "am 5", "here 5", "hello 5", "or 5", "not 5", "and 5", "we 5", "hello 5", "and 5", "you 5", "know 5", "who 5", "i 6", "am 6", "here 6", "hello 6", "or 6", "not 6", "and 6", "hello 6", "and 6", "you 6", "know 6", "who 6", "i 7", "am 7", "here 7", "hello 7", "and 7", "we 7", "are 7", "here1 7", "hello 7", "and 7", "you 7", "know 7", "who 7", "i 8", "am 8", "here 8", "hello 8", "and 8", "we 8", "miss 8", "are 8", "here1 8", "hello 8", "and 8", "you 8", "know 8", "who 8"]
var i = 0
app.get('/', function(req, res){
    console.log("received request");
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});
app.get("/error", (req, res) => {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end();
})
app.get('/health', (req, res) => res.send({"status": "OK", "time": new Date()}))
var port = process.env.PORT || 8080;
app.listen(port);

// setInterval(callback, delay, [arg1, arg2, ...])
// callback: The function to execute at each interval.
// delay: Time in milliseconds between each execution of the callback.
// arg1, arg2, ... (optional): Additional arguments passed to the callback function.

setInterval(function(str1, str2) {
    var text = makeid(40);
    var ran = Math.random()
    if (ran > 0.75)
        text = makeid(40)+ ""+makeid(40)+ ""+makeid(40)+ ""+makeid(40)
    else if (ran > 0.5)
        text = makeid(40)+ ""+makeid(40)+ ""+makeid(40)
    else if (ran > 0.25)
        text = makeid(40)+ ""+makeid(40)
  console.log(str1 + "" + str2 + "" + text+ "" +makeid(40));
  //console.log(logs[i])
  i++
  if (i == logs.length) i = 0
}, 5000, "Hello.", "How are you?");

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
//just a comment
module.exports = app;
