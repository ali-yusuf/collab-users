<template>

    <div class = "user" :key="task.id" v-for ="task in tasks">
       
    <h3>{{task.id}} </h3>
    <p>{{task.email}} </p>
    <!-- <div>
        <p> {{cart}}</p>-->
        <button v-on:click = "MessageMethod">login</button>
         <button v-on:click = "test" >getMessage</button>
         <div v-if="check===true">
              <p>{{name}}</p>
              <p>{{email}}</p>
            
         </div>
    

     <!-- <Task :task = "task"/> -->
  </div>

</template>

<script>
 
// import Task from './Task'
import AuthenticationService from '../services/AuthenticationService'

export default 

{
    name:'Tasks',
    props:{
        tasks:Array,
    },
    // components:
    // {
    //     Task
    // }
     data(){
    return{
     name:String,
     email:String,
      cart:5,
    }
    
    
     },
    
     methods:{
         MessageMethod(){
            this.cart = this.cart+1
            if(this.cart>14)
            {
                alert("Stop counting value reaches to  " +this.cart)
            }
             
         },
          test(){
              AuthenticationService.test({
                  name: this.name,
                  email: this.email
              })
       
            alert(this.msg+"message")
            this.check =true
             
         }
     } 
     
}
</script>
<style scoped>
.user{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: darkgray;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>