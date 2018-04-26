var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = require('../config.js');

router.use('/', wechat(config, function (req, res, next) {
    var message = req.weixin;
    var content = message.Content;
	  var site = "https://10.59.169.150:3001";
		var domain = "/wechat_service/" + message.FromUserName;
    console.log(message);
    if (message.Event == "subscribe"){
	res.reply('欢迎，如果你是第一次使用此公众号，请输入User关键字绑定个人信息\n请输入关键字使用我们的为您提供的服务:\nNews 查看最新信息 \nTopics 查看热门话题 \nFollows 查看我的关注 \nProfile 查看个人信息 \n祝您生活愉快 ');
    }else if (content.toUpperCase().indexOf('USER') >= 0) {
			 res.reply('还在开发中，敬请期待');
		} else if (content.toUpperCase().indexOf('NEWS') >= 0){
		   res.reply([
								{
									title: 'A new TV experience awakens',
									description: 'Experience the A8F 4K HDR OLED TV, featuring Dolby Vision, Acoustic Surface and high contrast ratio with pure black.',
									picurl: site + '/customization/wechat/banner/4.jpg',
									url: domain + '/news?link=/topic/BK7qBGZMHltiXkV3WOxAMN/nike/a-new-tv-experience-awakens'
								},{
									title: 'Every picture incredibly real on a bigger screen',
									picurl: site + '/customization/wechat/banner/1.jpg',
									url: domain + '/news?link=/blog/USY9wV5ojjrBBGEBKbybKw/nike/every-picture-incredibly-real-on-a-bigger-screen'
								},{
									title: 'A clearer, more colorful picture',
									picurl: site + '/customization/wechat/banner/2.jpg',
									url: domain + '/news?link=/blog/jabhSZ4cSu1GrYsqX8zdft/nike/a-clearer-more-colorful-picture'
								}
								]);
		} else if (content.toUpperCase().indexOf('PROFILE') >= 0){
		   res.reply([
								{
									title: 'Watir Admin',
									description: 'I am a third year student at WisTech and currently interning as associate buyer with Acecorp.',
									picurl: '',
									url: domain + '/profile'
								}
								]);
		} else if (content.toUpperCase().indexOf('FOLLOW') >= 0){
		   res.reply([
								{
									title: 'A new TV experience awakens',
									description: 'Experience the A8F 4K HDR OLED TV, featuring Dolby Vision, Acoustic Surface and high contrast ratio with pure black.',
									picurl: site + '/customization/wechat/banner/4.jpg',
									url: domain + '/follows'
								}
								]);
		} else if (content.toUpperCase().indexOf('TOPIC') >= 0){
		  	res.reply([
								{
									title: 'X900F| LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart',
									description: 'Light and dark are perfectly mastered on this 4K HDR TV with high contrast X-tended Dynamic Range™ PRO technology. See more detail in everything',
									picurl: site +  '/customization/wechat/banner/3.jpg',
									url: domain + '/topics'
								}
								]);
		}else{
		res.reply('欢迎，如果你是第一次使用此公众号，请输入User关键字绑定个人信息\n请输入关键字使用我们的为您提供的服务:\nNews 查看最新信息 \nTopics 查看热门话题 \nFollows 查看我的关注 \nProfile 查看个人信息 \n祝您生活愉快 ');
    }
}));

module.exports = router;
