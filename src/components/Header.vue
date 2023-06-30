<template>
  <header>
    <!-- <h1>{{ title }}</h1>
    <h2>{{show}}</h2>
    <h2>{{sh}}</h2> -->
    <ul>
      <li><Button id="home" v-on:click="home" text="Home" color="green" /></li>
      <li>
        <Button
          id="subject"
          v-on:click="subject"
          text="SUBJECTS"
          color="green"
        />
      </li>
      <li>
        <div class="dropdown">
          <Button id="test" v-on:click="test" text="TEST" color="green" />

          <div class="dropdown-content">
            <Button
              id="maths"
              v-on:click="maths"
              text="Mathematics (Applied & Core)"
              color="green"
            />
            <Button
              id="computer"
              v-on:click="computer"
              text="Computer Science/Informatics Practices"
              color="green"
            />
            <Button
              id="physics"
              v-on:click="physics"
              text="Physics"
              color="green"
            />
            <Button
              id="chemistry"
              v-on:click="chemistry"
              text="Chemistry"
              color="green"
            />
          </div>
        </div>
      </li>
      <!-- <li>
        <Button
          id="testapi"
          v-on:click="testapi"
          text="TEST Api"
          color="green"
        />
      </li> -->
      <li>
        <Button v-on:click="aboutus" text="About Us" color="green" />
      </li>
      <li><Button text="Login" @click="login" color="green" /></li>
      <li>
        <Button text="Signup" v-on:click="signup" color="green" />
      </li>
    </ul>

    <!-- This section of code is used to make it single page application, You can
    call a component over it -->
    <component v-bind:is="component"></component>
    <!-- <Button
      id="home"
      v-on:click="component = 'Home'"
      text="TEST"
      color="green"
    />
    <Button
      id="aboutus"
      v-on:click="component = 'Aboutus'"
      text="About Us"
      color="green"
    /> -->
    <!-- <Button id="login" text="Login" @click="login" color="green" /> -->

    <PostCpmponent v-on:isVisible="onclickChild($event)" />
    <!-- <Button
      :text="login ? 'Close' : 'login'"
      :color="showAddTask ? 'red' : 'green'"
    /> -->
  </header>
</template>

<script>
import Button from "./Button";
//import PostComponent from './PostComponent'
//import navbar from './navbar'
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",

  //   const close = () => {
  //     root.$destroy();
  //     root.$el.parentNode.removeChild(root.$el);
  //   };
  //   return { close };
  // },
  props: {
    title: String,
    //showAddTask: Boolean,
  },
  components: {
    Button,
    //'PostComponent':PostComponent,
    //navbar
  },
  data() {
    return {
      component: "",
      show: true,
      sh: "hii",
    };
  },
  methods: {
    onclickChild(show) {
      this.show = show;
      if (!this.$forceUpdate) {
        this.sh = "updated";
      }
      alert(this.show);
    },
    home() {
      this.$router.push({ path: "/collab-users" });
    },
    signup() {
      this.$router.push({ path: "/signup" });
    },
    subject() {
      this.$router.push({ path: "/subject" });
    },
    test() {
      this.$router.push({ path: "/collab-users/test" });
    },
    aboutus() {
      this.$router.push({ path: "/aboutus" });
    },
    login() {
      this.$router.push({ path: "/login" });
    },
    maths() {
      this.$router.push({ path: "/maths" });
    },
    computer() {
      this.$router.push({ path: "/computer" });
    },
    physics() {
      this.$router.push({ path: "/physics" });
    },
    chemistry() {
      this.$router.push({ path: "/chemistry" });
    },
  },
  // //   computed: {
  // //     homePage() {
  // //       if (this.$route.path === '/') {
  // //         return true
  // //       } else {
  // //         return false
  // //       }
  // //     },
  //   },
});
</script>

<style scoped>
li {
  display: inline;
}
header {
  display: flex;
  position: absolute;
  right: 0;
  /* justify-content: space-between; */
  align-items: left;
  height: 44px;
  width: fit-content;
}
#login {
  position: absolute;
  top: 0px;
  right: 200px;
}
#signup {
  flex: 10px;
  position: fixed;
  top: 0px;
  right: 60px;
}
button:hover {
  text-decoration: underline;
}
/* #signup:hover {
  text-decoration: underline;
}
#subject:hover {
  text-decoration: underline;
}
#test:hover {
  text-decoration: underline;
}
#about:hover {
  text-decoration: underline;
}
#home:hover {
  text-decoration: underline;
} */
/* #home{
  position: fixed;
  top: 50px;
  left: 200px;
}  */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content button {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content button:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
