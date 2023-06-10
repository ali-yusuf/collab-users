<template>
  <div class="signup">
    <span>
      <h2>Post Data To Api into PostGreSql</h2>
      <!-- <component v-bind:is="component"></component> -->
      <!-- <Button id ="signup" text="Signup"  v-on:click = "component = 'PostComponent' " color = "green" /> -->

      <Button id="close" v-on:click="close" text="X" color="green"
    /></span>
    <!-- <Button id="close" text="X"  v-on:click = "component = 'Testapi'" color = "green"/></span> -->

    <form @submit="SignUp" method="post">
      <!-- <div class='error-section' v-show="errorState">
           <p>There were a few errors while submitting...</p>
           <ul class="error-list">
           <li v-show="id == null">Please enter an id</li>
           <li v-show="name == null">Please enter a name</li>
           <li v-show="email == null">Please enter your  email</li>
          <li v-show="password == null">Please enter a password</li>
          </ul>
          </div> -->

      <input type="number" name="Id" placeholder="Id" v-model="posts.Id" />
      <br />
      <br />
      <input type="text" name="name" placeholder="name" v-model="posts.name" />
      <br />
      <br />
      <input
        type="text"
        name="email"
        placeholder="email"
        v-model="posts.email"
      />
      <br />
      <br />
      <input
        type="text"
        name="password"
        placeholder="password"
        v-model="posts.password"
      />
      <br />
      <br />
      <Button id="signupbtn" type="submit" text="SignUp" color="green" />
    </form>
  </div>
</template>
<script>
import Button from "./Button.vue";
//import Header from  './Header'
//import Testapi from './testapi'

import axios from "axios";
export default {
  name: "PostComponent",
  props: {
    isModalVisible: String,
    //showAddTask: Boolean,
  },
  components: {
    Button,
    // 'Header':Header,
    //'Testapi':Testapi
  },

  data() {
    return {
      posts: {
        Id: "",
        name: "",
        email: "",
        password: "",
      },
      component: "",
      // errorState:false,
    };
  },
  methods: {
    //Method to create user or submit data through form
    //SignUp(e)
    SignUp(e) {
      axios
        .post("http://localhost:2000/register", this.posts)
        .then(alert("Account created successfully... " + this.posts.name))
        // .then((result) => alert("Account created successfully... "+this.posts.name))
        .catch((error) => alert(error));

      //console.log(this.posts)
      e.preventDefault();
      // Landed to the home page...
      this.$router.push({ path: "/" });
    },
  },
  close() {
    this.$router.push({ path: "/login" });
  },
};
</script>
<style scoped>
.signup {
  width: 460px;
  height: 340px;
  background-color: honeydew;
  padding: 5px;
  border: solid 1px black;
  border-radius: 4px;
  align-items: right;
  position: relative;
  top: 40px;
  left: 1000px;
}
input {
  height: 30px;
  padding: 2px;
  border: solid black 1px;
  border-radius: 2px;
  font-size: 20px;
}
#close {
  padding: 2px;
  position: absolute;
  top: -10px;
  right: -5px;
}
.error-section {
  width: 400px;
  height: 100px;
  border: black solid 2px;
  margin-left: 10px;
}
</style>
