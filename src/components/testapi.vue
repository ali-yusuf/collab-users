<template>
  <div class="testapi">
    <h1>Fetch Information</h1>
    <!-- Override the button with fetchdata method -->
    <Button id="fetch" v-on:click="fetchData" text="FetchData" color="green" />
    <div class="user">
      <li v-for="task in mutableList" :key="task.id">
        {{ "Id: " + task.id }}
        {{ "Name: " + task.name }}
        {{ "Email: " + task.email }}
        {{ "Password: " + task.password }} <br />
        <br />
      </li>
    </div>
  </div>
</template>
<script>
//import axios from 'axios';
import Button from "./Button.vue";

export default {
  components: { Button },
  data() {
    return {
      tasks: [
        { name: "hello", email: "a@gmail.com" },
        { name: "hello2", email: "a2@gmail.com" },
      ],

      mutableList: [],
    };
  },
  name: "Testapi",
  props: {
    users: Array,
  },
  methods: {
    //Fetch Method get data from API
    fetchData() {
      fetch("http://localhost:2000")
        //fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.mutableList = data;
          console.log(data);
        })
        .catch((err) => console.log(err.meassage));
    },
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
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 10 0%;
  margin-left: 10px;
  background-color: darkgray;
  color: #000;
}
.user {
  height: 100%;
  width: 600px;
  padding: 5px;
  background-color: yellow;
  color: green;
}
</style>
