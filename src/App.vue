<template>
  <div id="app">
    <navbar />
    <h1>Welocme to yor first page</h1>
    <button @click="getData">check here</button>
    <div class="text-bg" v-for="user in tasks" :key="user.Id">
      <h3 class="green-text">{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <p>{{ user.password }}</p>
    </div>
    <component v-bind:is="component"></component>
    <!-- <Button
      id="signup"
      text="Signup"
      v-on:click="component = 'PostComponent'"
      color="green"
    /> -->

    <tasks />
    <!-- <p>{{ cart }}</p> -->

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
//const fs = require("fs");
import axios from "axios";

import navbar from "./components/navbar.vue";
import Home from "./components/Home.vue";
import Tasks from "./components/Tasks.vue";
//import TestApi from "./components/TestApi.vue";
import PostComponent from "./components/PostComponent.vue";
import Header from "./components/Header.vue";
import Test from "./components/Test.vue";
//import userData from "./users.json";
//let users = [];

//import AuthenticationService from './services/AuthenticationService';

export default {
  name: "App",
  components: {
    navbar,
    Header,
    Home,
    Tasks,
    //TestApi,
    Button,
    PostComponent,
    Test,
  },

  data() {
    return {
      tasks: [],
      // Id: Number,
      // name: String,
      // email: String,
      cart: 0,
    };
  },

  methods: {
    // signup() {
    //   this.$router.push({ path: "/signup" });
    // },
    getData() {
      // this.tasks = JSON.parse(JSON.stringify(userData));
      // console.log(this.tasks);
      // console.log(userData);
      axios
        .get("http://localhost:2000/users")
        .then((response) => {
          console.log("User got successfully:", response.data);
          this.tasks = response.data;

          // Do something with the response, such as updating the UI or redirecting to another page
        })
        .catch((error) => {
          console.error("Error getting user:", error);
          // Handle the error, such as displaying an error message to the user
        });
    },

    //});
    //  client.end();
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
.green-text {
  color: green;
}
.text-bg {
  width: 200px;
  background: antiquewhite;
  text-align: center;
  margin-top: 5px;
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
  padding: 10px 20px;
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
