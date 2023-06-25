<template>
  <div class="login">
    <span>
      <h2>Login Data To Api into PostGreSql</h2>
      <component v-bind:is="component"></component>
      <!-- <Button id ="signup" text="Signup"  v-on:click = "component = 'PostComponent' " color = "green" /> -->

      <Button id="close" v-on:click="close" text="X" color="green"
    /></span>
    <!-- <Button id="close" text="X"  v-on:click = "component = 'Testapi'" color = "green"/></span> -->

    <!-- <form @submit.prevent="Login" method ="login"> -->
    <form @submit.prevent="login" method="post">
      <input type="text" name="email" placeholder="email" v-model="email" />
      <br />
      <br />
      <input
        type="text"
        name="password"
        placeholder="password"
        v-model="password"
      />
      <br />
      <br />
      <Button id="loginbtn" type="submit" text="Login" color="green" />
    </form>
  </div>
</template>
<script>
import Button from "./Button.vue";
//import Header from  './Header'
//import Testapi from './testapi'

import axios from "axios";
export default {
  name: "login",
  props: {
    //showAddTask: Boolean,
  },
  components: {
    Button,
    // 'Header':Header,
    //'Testapi':Testapi
  },

  data() {
    return {
      email: "",
      password: "",

      // component:'',
    };
  },
  methods: {
    login() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      // Make a POST request to your login endpoint
      axios
        .post("http://localhost:2000/login", userData)
        .then((response) => {
          console.log("Login successful:", response.data);
          // Do something with the response, such as storing the token or redirecting to another page
        })
        .catch((error) => {
          console.error("Login failed:", error);
          // Handle the error, such as displaying an error message to the user
        });
    },
  },
};
// methods: {
//Method to create user or submit data through form
// async Login() {
//   try {
//     const result = await axios.post(
//       "http://localhost:2000/test" + "/" + this.email
//     );
//     // console.log(JSON.stringify(result));
//     const { token } = result.data || {};
//     localStorage.setItem("token", token);
//     console.log(token);
//     this.$router.push({ path: "/subject" });
//   } catch (error) {
//     console.log(error);
//     alert("Invalid Email or Password.");
//   }
// },

//};
// .then(
//   (res) => console.log(res + " " + this.token),
//   this.$router.push({ path: "/subject" })
// )
// .catch((error) => console.log(error));

// console.log(result);
//         if(res!=null)
//   {
//        this.$router.push({path: '/subject'})
//   }
//   else
//   {
//       console.log("Something went wrong please make a correction ")
//   }

// e.preventDefault();
</script>
<style scoped>
.login {
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
</style>
