<template>
  <div class='tiaoz'>
  
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="position:relative" >
  <el-form-item label="邮件地址" prop="name"><span>@</span><el-select v-model="value" placeholder="请选择" style="position:absolute;left:233px;width:110px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

   <el-form-item label="密码" prop="passd" >
    <el-input v-model="ruleForm.passd"  ></el-input>
  </el-form-item>
    
    <el-form-item label="确认密码" prop="passd1">
    <el-input v-model="ruleForm.passd1"></el-input>
  </el-form-item>
 
   <el-form-item label="验证码" prop="code">
    <el-input v-model="ruleForm.code"></el-input>
  </el-form-item>
  <Code class="Code"></Code>
 


  <el-form-item label="手机号码" prop="pnumber">
    <el-input v-model="ruleForm.pnumber" id="number"></el-input>
  </el-form-item>
  <span class="edit">请编辑短信:</span>
  <span class='msg'>(信费用由运行商收取)</span>
  <el-radio v-model="radios" label="1" class='agreen'>同意</el-radio>
  </el-form>
  
  </div>  
    
  
</template>>
<script>
import Code from '@/components/identifyingCode'

import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input/build/js/intlTelInput.js'

  export default {
    mounted:
      function () {

        var  input  = document.querySelector("#number")
        intlTelInput(input,{separateDialCode:true});
    },
    data() {
      return {
        ruleForm: {
          name: '',
          passd:'',
          passd1:'',
          code:'',
          pnumber:'',
          radios:''
        
        },
        options: [{
          value: '选项1',
          label: '@qq.com'
        }, {
          value: '选项2',
          label: '@126.com'
        }],
        value: '@126.com',
        rules: {
          name: [
            { required: true, message: '6~18个字符，可使用字母、数字、下划线，需以字母开头', trigger: 'blur' },
            
          ],
          passd:[
            {required: true, message: '6~16个字符，区分大小写', trigger: 'blur'},
            {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}

            ],
            passd1:[
            {required: true, message: '6~16个字符，区分大小写', trigger: 'blur'},
            {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'} 
            ],
            code:[
              {required: true, message: '不区分大小写',trigger: 'blur'}
              ],
            pnumber:[
              {required: true, trigger: 'blur'}
              ]
        }
    
    }
    },
    components:{
        Code
    }
  }
</script>

<style scoped>
.tiaoz{
  width: 300px;
  margin: 0,auto;
}

span{
  position: absolute;
  top:0px;
  left: 209px;

}
.Code{
  position: absolute;
  left: 321px;
  top: -63px;
  width: 50px;
  
}
.edit{
  position: absolute;
  top: 346px;
  left:100px;
  font-size: 5px;
  color: rgb(90, 78, 78);
}
.msg{
  position: absolute;
  top: 384px;
  left:132px;
  font-size: 5px;
  color:rgb(90, 78, 78);
}

.agreen{
  position: absolute;
  top: 427px;
  left:94px;
}

.toogle{
  font-size: 5px;
  float: right;
}

</style>