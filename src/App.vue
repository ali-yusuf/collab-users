<template>
  <div class="container">
    <navbar />
    <h1>Welocme to yor first page</h1>
    <button @click="getData">check here</button>
    <component v-bind:is="component"></component>
    <!-- <Button
      id="signup"
      text="Signup"
      v-on:click="component = 'PostComponent'"
      color="green"
    /> -->

    <tasks />
    <p>{{ cart }}</p>

    <!-- <Suspense>
      <template #default>
        <Testapi />
      </template>
      <template #fallback>
        <h3>Loading....</h3>
      </template>
    </Suspense> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Button from "./components/Button.vue";
//import { response } from 'express'
//const process = require('process');
//const client = require("./database");

import navbar from "./components/navbar.vue";
import Home from "./components/Home.vue";
import Tasks from "./components/Tasks.vue";
import Testapi from "./components/testapi.vue";
import PostComponent from "./components/PostComponent.vue";
import Header from "./components/Header.vue";

//import AuthenticationService from './services/AuthenticationService';

export default {
  name: "App",
  components: {
    navbar,
    Header,
    Home,
    Tasks,
    Testapi,
    Button,
    PostComponent,
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
    // signup() {
    //   this.$router.push({ path: "/signup" });
    // },
    // async getData() {
    //   try {
    //     await client.connect();
    //     const result = await client.query("select * from test");
    //     this.tasks = result.rows;
    //     console.log(result.rows);
    //   } catch (error) {
    //     alert(error + "Errot is here");
    //   }
    //   client.end();
    // },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */
body {
  font-family: "Poppins", sans-serif;
}
.container {
  /* margin: 30px auto; */
  overflow: auto;
  /* min-height: fit-content; */
  border: 1px solid steelblue;
  /* padding: 3px; */
  /* border-radius: 5px; */
  display: inline-block;
  min-width: 100%;
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
@import "~bootstrap/dist/css/bootstrap.css";
</style>
