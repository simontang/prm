var port=process.env.C9_PORT;
var tapi = require('weibo').tapi;
// change appkey to yours
var appkey = '4068379518', secret = '894a1c395c7f6d47761da157213c474d';
var oauth_callback_url = 'your callback url' || 'oob';
tapi.init('tsina', appkey, secret, oauth_callback_url);
tapi.public_timeline({}, function(error, data, response) {
  if (error) {
      console.error(error);
  } else {
      
      var result="<ul>";
      data.forEach(function (val, index, array) {
  console.log(val);
  result+="<li><img src='"+val.user.profile_image_url+"'><b>"+val.user.name+":</b></img>"+JSON.stringify(val)+"</li>";
  });
  result+="</ul>";
	  var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/html",});
  response.write("<html><head><meta charset='utf-8'>");
  response.write(result);
  response.write("</head></html>");
  response.end();
}

http.createServer(onRequest).listen(port);

console.log("Server has started.");
	  
  }
});