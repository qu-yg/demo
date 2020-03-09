<template>
<div @click="toggle" style="position:relative">
  
  <img  :src="verifiy" alt="验证码"  style=" background-color:rgb(212, 233, 212);">
       
    
</div>
</template>

<script>
export default {
   data(){
     return{
       verifiy:'/api/svg'
     }
   },
   methods:{

             toggle(){
                   
                  return this.verifiy = this.verifiy +'?' + new Date().toString
            }

  }
  
  
}
</script>

<style scoped>

  .fs{
    font-size: 5px;
    position: absolute;
    left:532px;
    top: 46px;
    text-decoration: none;
    
  } 

</style>