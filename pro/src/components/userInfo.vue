<template>
<div>

      <table>
          <tr>
              <td>序号</td>
              <td>邮箱</td>
              <td>手机号</td>
          </tr>
         <tr v-for='(item ,i) in userlist.list' :key='item.id' style="width:300px">
             <td >{{++i}}</td>
             <td>{{item.email}}</td>
             <td>{{item.phonenumber}}</td>
        </tr>        
     </table>

</div>
     
</template>
<script>
import axios from 'axios'

export default {
    data(){
    return{
        userlist:[],
        
    }
},

mounted() {
    axios.get("/api/users/info").then(response=>{
        let res = response.data
        if(res.status==0){
            this.userlist=res.result
        }
        else{
            this.userlist=[]
        }
    })
},
}
</script>
<style>

       tr{

         border: 1px solid #0a0c0f; 

        }

        table{
      
            border-collapse:collapse;

         }

         td{
             border-right: 1px solid #0a0c0f;
             width: 300px;
             text-align: left;
         }
         


</style>