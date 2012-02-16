
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.writeHead(200);
  //req.doesnotexist();
   res.render('index', { title: 'Weibo Login' })
};


//public timeline
exports.publictimeline=function(req,res){
  
  var wb=require('../lib/weibo/sinaAPI.js').WeiboApi;
  wb.friends_timeline({}, function(error, data, response) {
  if (error) {
      console.error(error);
  } else {
      
      var result="<ul>";
      data.forEach(function (val, index, array) {
  //console.log(val);
  result+="<li><img src='"+val.user.profile_image_url+"'><b>"+val.user.name+":</b></img>"+JSON.stringify(val)+"</li>";
  });
  result+="</ul>";
  
  res.render('publictimeline', { title:'public time', data: data });
  }});
  //res.render('publictimeline', { title:'public time', data: result });
};