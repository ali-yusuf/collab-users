<template>
    <div class ="container">
        <h1> Learn Computer Science</h1>
        <!-- Override the button with fetchdata method -->
    <Button id = "fetch" v-on:click = "fetchData" text="Click Here" color = "green"/>
    <div class = "user">
    <ul v-for ="task in mutableList" :key="task.id">
        <!-- {{"Id: "+task.id}}  -->
       <h2> {{task.title}} </h2> <p>{{task.description}}</p>
       <br> <br>  </ul>
</div>
 </div> 
</template>
<script>
//import axios from 'axios';
import Button from './Button.vue';
 

export default {
  components: 
  { Button },
     data(){
         
       return{
          
     
     mutableList: [],

      
        }
     },
     name:'ComputerScience',
     props:{
      users:Array,
     },
      methods:{
        //Fetch Method get data from API
         fetchData(){
             
          fetch("http://localhost:2000/computer")
         .then(res => res.json())
         .then((data) => {
         this.mutableList = data;})
        .catch(err => console.log(err.meassage))
      
        }
     },
    //Get Data using axios , It is not working fine now
      /*methods:{
         fetchData(){
          axios.get("http://localhost:2000/test")
          .then(res => res.json())
          .then((data) => {
              this.mutableList = data;})
         .catch(err => console.log(err.meassage))
         }
         },*/
     /* mounted(){
          fetch("http://localhost:2000/test")
          .then(res => res.json())
         .then((data) => {
              this.mutableList = data;})
         .catch(err => console.log(err.meassage))
      }*/

      
    
    //fetch api using asynch method
    /* async setup() {
        try {
           
        const result= await axios.get('http://localhost:2000/test/')
       
       console.log(result)
        this.mutableList=result
       return { result }
       } catch (error) {
         console.log(error)
            
    }
  }*/
    //  data(){
    //    return{
    // //   tasks:[{"name":"hello","email":"a@gmail.com"},
    // //   {"name":"hello","email":"a@gmail.com"}],
    // tasks:[],
    //   name:String,
    //   email:String
    //     }
    //  },
    
    // // name:'Tasks',
    //props:{
    // taskss:Array,
    //  },
}

</script>

<style scoped>
.container{
    height: 100%;
    width: 10
    0%;
    background-color: darkgray;
    color: #000;
}
.user{
    height: 100%;
    width: 100%;
    padding: 5px;
    background-color: yellow;
    color:green
}
h1{
    text-align: center;
    color: black;
}
#fetch{
    position: relative;
    left:45%
    
}
ul{
    margin-left: 20px;
}
</style>


