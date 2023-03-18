<template>
  <div class="container">
    <navbar />
    <!-- <button @click="signup"> check </button> -->
    <!-- <component v-bind:is="component"></component>
      <Button id ="signup" text="Signup"  v-on:click = "component = 'PostComponent' " color = "green" /> -->

    <!-- <Header/> -->
    <!-- <tasks/> -->
    <!-- <p> {{cart}}</p> -->

    <!-- <Suspense>
   <template #default>
<Testapi/> 
</template>
<template #fallback>
  <h3>Loading....</h3>
</template>
</Suspense> -->
  </div>
</template>
<script>
//import Button from './components/Button.vue'
//import { response } from 'express'
//const process = require('process');
//const client = require('./database');

//import Header from './components/Header.vue'
import { defineComponent } from "@vue/runtime-core";
import navbar from "./components/navbar.vue";
// import Home from './components/Home.vue'
// import Tasks from './components/Tasks.vue'
//import Testapi from './components/testapi.vue'
//import PostComponent from './components/PostComponent.vue'

//import PostComponent from './components/PostComponent.vue'

// import AuthenticationService from './services/AuthenticationService'

export default defineComponent({
  name: "App",
  components: {
    // Header,
    navbar,
    //Home
    //Tasks,
    //Testapi,
    // Button
  },

  data() {
    return {
      tasks: [],
      name: String,
      email: String,
      cart: 0,
    };
  },
  methods: {
    signup() {
      this.$router.push({ path: "/signup" });
    },
  },
  // methods:{
  //  test(){
  //      AuthenticationService.test({
  //     name:this.name,
  //     email:this.email
  //           })

  //         // alert(this.msg+"message")
  //         // this.check =true

  //      }

  // }
  //   methods:{
  //     async login(){
  //       try{
  //       await client.connect();
  //       const result =  client.query("select * from test")

  //       this.tasks = (result.rows);

  // }

  //       catch(error){
  //         alert(error+"Errot is here")

  //       }
  //       client.end();
  //     }

  //   }
});

/*(async() => {
       await client.connect();
       const result = await client.query('select * from test');
      //console.log(result.rows);
     //alert(result.rows);
     return result.rows;

     //client.end();
})();
  console.log(this.tasks);
   }
/*created()
{
      this.tasks= [
      {
       id:1,
       text:'Ali',
        email:'ali@gmail.com'
      },
       {
         id:2,
        text:'Aliya',
        email:'aliya@gmail.com'

      },
      {
        id:3,
        text:'Aleena',
        email:'aleena@gmail.com'

       }
      ]
  console.log(this.tasks);
}*/
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 100%;
  /* margin: 30px auto; */
  overflow: auto;
  min-height: fit-content;
  border: 1px solid steelblue;
  background: green;
  /* padding: 3px; */
  /* border-radius: 5px; */
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  /* border-radius: 5px; */
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.btn :hover {
  background: red;
}
</style>
