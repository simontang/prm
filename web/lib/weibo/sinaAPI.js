var tapi = require('weibo').tapi;
var appkey = '4068379518', secret = '894a1c395c7f6d47761da157213c474d';
var oauth_callback_url = 'your callback url' || 'oob';
tapi.init('tsina', appkey, secret, oauth_callback_url);

exports.WeiboApi=tapi;