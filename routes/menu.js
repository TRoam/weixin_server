var express = require('express');
var router = express.Router();

var config = require('../config.js');
var request = require('request');

router.get("/", function(req, res, next){
  var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&" +
            "appid=" + config.appid +
            "&secret=" + config.secret;

  // get accessToken
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var accessToken = JSON.parse(body).access_token;
      console.log("request token", accessToken);

      //menu data
      var requestData = {
        "button":[
        {    
             "type":"click",
             "name":"今日歌曲",
             "key":"V1001_TODAY_MUSIC"
         },
         {
              "name":"菜单",
              "sub_button":[
              {    
                  "type":"click",
                  "name":"搜索",
                  "key": "V1002"
               },
               {
                  "type":"click",
                  "name":"赞一下我们",
                  "key":"V1001_GOOD"
               }]
          }]
      };

      //create menu
      var options = {
        url: "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + accessToken,
        method: "POST",
        json: true,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestData)
      };

      request(options, function(error, response, body) {
        console.log(error);
        if (!error && response.statusCode == 200) {
          console.log(body);
        }
      });
    }
  });
  res.send('api unauthorized hint');
});

module.exports = router;