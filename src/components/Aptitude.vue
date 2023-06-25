<template>
  <div class="container">
    <h1>Learn Elementary mathematics</h1>
    <!-- Override the button with fetchdata method -->
    <Button id="fetch" v-on:click="fetchData" text="Click Here" color="green" />
    <div class="user">
      <ul v-for="task in mutableList" :key="task.id">
        <!-- {{"Id: "+task.id}}  -->
        <h2>{{ task.title }}</h2>
        <p>{{ task.description }}</p>
        <br />
        <br />
      </ul>
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
      mutableList: [],
    };
  },
  name: "Aptitude",
  props: {
    users: Array,
  },
  methods: {
    //Fetch Method get data from API
    fetchData() {
      fetch("http://localhost:2000/computer")
        .then((res) => res.json())
        .then((data) => {
          this.mutableList = data;
        })
        .catch((err) => console.log(err.meassage));
      alert("Not able to fetch data");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 10 0%;
  background-color: darkgray;
  color: #000;
}
.user {
  height: 100%;
  width: 100%;
  padding: 5px;
  background-color: yellow;
  color: green;
}
h1 {
  text-align: center;
  color: black;
}
#fetch {
  position: relative;
  left: 45%;
}
ul {
  margin-left: 20px;
}
</style>
