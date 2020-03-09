<template>
<div class='shadow'>
 <form>
<fieldset style="position:relative">

     <div class="zhezhao"></div>
     <img src="../../static/img/erweima.png" title="仅供演示" class="dw">
  
  <h3>账号登录</h3> 
    
  <el-input
    type='text'
    placeholder="手机号或电子邮箱"
    prefix-icon="el-icon-user"
    class='size-top'
    v-model="email">
  </el-input>

  <br>


  <el-input
    type="password"
    placeholder="输入密码"
    prefix-icon="el-icon-lock"
    class='size-down'
    v-model="pwd">
  </el-input>
<br>

  <el-radio v-model='radio'  class='padding-left' label="1" >十天免登录</el-radio>
  <a href="#"  calss='padding-right' class='mm'>忘记密码?</a>
  <br>
   <el-button type="primary"
              class='but-size'
              @click="login"
   >登录</el-button>
   <br>
   <br>
  <a href="http://localhost:8080/#/register" class='newcount'>注册新账号</a>

      <footer >
        <div class='bg'>

      <span class='fontSize' >会员特权，恢复误删邮件</span> 
      <a href="#" class='vip'>升级会员</a>

        </div>
      
      </footer>
     <span class="iconfont icon-V hg"></span>




</fieldset>
 </form>
  
</div>
    
</template>

<script>

import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/radio.css'
import 'element-ui/lib/theme-chalk/button.css'
import axios from 'axios'
import '../../static/iconfont/iconfont.css'


export default {
  data () {
    return {
     email:'',
     pwd:'',
     radio:'1'
    }
  },

  methods: {
    login(){
      if(this.email=='' || this.pwd ==''){
        alert('请输入email 或 password！')
        return
      }
       axios.post('/api/users/login',{
         email: this.email,
         pwd: this.pwd
       }).then(response=>{
         let res =response.data
         console.log(res)
         if(res.status==0){
           //todo
          alert('登录成功！')
          
           this.$router.push({ path: '/user' })
        
         }else{
           //todo
           console.log(res.err)
         }
       })
    }
    
  },



}


</script>
<style scoped>


*{
  margin: 0;
  padding: 0;
}
h3{
  padding-top: 40px;

}
 a{
   text-decoration: none;
 }
.size-top{
  width:300px;
  height: 50px;
  margin: 15px;
}
.size-down{
  width:300px;
  height: 50px;
}
.but-size{
  width:300px;
  height: 40px;
}
.padding-left{
  padding-top: 20px;
  padding-bottom: 20px;
  float: left;
  padding-left:45px;
}
.padding-right{
  display: inline-block;
  padding-top: 10px;
}

.newcount{
  display:inline-block;
  padding-top: 20px;
  padding-bottom: 20px;
}

fieldset{
  width: 400px;
  margin: 0 auto;
  height: 500px;
  border-radius: 1%;
 
}

.vip{
  border:1px solid blue;
  padding-left: 5px;
  padding-right: 5px;
  
}
.fontSize{
  font-size: 15px;
  font-weight: bold;
  
}

.bg{
  position: absolute;
  top: 35%;
  left: 27%;
}
 footer{
   position: relative;
   bottom:-65px;
   background-color:#eff7f7;
   width: 400px;
   height: 65px;
 }
 .zhezhao{
    width: 0;
    height: 0;
    border-bottom: 63px solid white;
    border-left: 63px solid transparent;
    transform:rotate(90deg);
    position: absolute;
    /* float: right; */
    top:0px;
    left: 336px;
    z-index: 100;
 
 }
 .dw{
   position: absolute;
   /* float: right; */
   left: 336px;
   top: 0px;
 }
 .zhezhao:hover{
   z-index: -999;
 }
 .mm{
   position: absolute;
   top: 208px;
   left: 275px;
 } 
 .hg{
   position: absolute;
   top: 451px;
   left: 79px;
   z-index: 100;
   font-size: 30px;
 }
</style>
