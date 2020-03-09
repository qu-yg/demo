const express = require('express');
const svgCaptcha = require('svg-captcha');
const router = express.Router();
router.get('/',(req, res)=>{
  const cap = svgCaptcha.create({
          // 翻转颜色
          inverse: false,
          // 字体大小
          fontSize: 36,
          // 噪声线条数
          noise: 1,
          // 宽度
          width: 110,
          // 高度
          height: 40,
          size:6,
          color: true,
         
      });
  req.session.captcha = cap.text; // session 存储验证码数值
  console.log(req.session)
  res.type('svg'); // 响应的类型
  res.send(cap.data)
})
 
module.exports = router;
