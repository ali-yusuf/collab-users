<template>
  <div id="subject">
    Welocme to Subject page bro... <br />
    you can get the study material from this page only..
    <div class="search">
      <input
        type="text"
        id="searchIten"
        v-model="search"
        placeholder="search subjects"
      />
    </div>
    console.log(searchIten);
    <button
      class="btn btn-primary btn-block w-75 my-4"
      v-on:click="filterSubjects"
      type="submit"
    >
      search
    </button>
    <!--<Button id="fetch" v-on:click="fetchData" text="Click Here" color="green" />-->

    <ComputerScience />
    <Maths />
    <Aptitude />
    <testapi />

    <!-- <div
      class="component"
      v-for="component1 in filterSubjects"
      :key="component1.id"
    />
    <component1 /> -->
    <!-- <Button id="close" v-on:click= "computer" text="computer science" color = "green" /> -->
  </div>
</template>
<script>
//import { defineComponent } from 'vue'     //'@vue/composition-api'
import { defineComponent } from "@vue/runtime-core";
import ComputerScience from "./ComputerScience.vue";
import Maths from "./Maths.vue";
import testapi from "./testapi.vue";
import Aptitude from "./Aptitude.vue";
export default defineComponent({
  components: { testapi, ComputerScience, Maths, Aptitude },
  // setup() {
  name: "Subject",
  data() {
    return {
      components: [],
      search: "",
    };
  },
  methods: {
    // Incomplete method to implement a search bar
    computed: {
      filterSubjects: function() {
        return this.components.filter((comp) => {
          console.log("subject sorted");
          return comp.match(this.search);
        });
      },
    },
  },
});
</script>
<style scoped>
/* #first{
    
    margin-inline: 100px;
    position: relative;
}
#second{
    position: absolute;
    top: 100px;
    left: 1000px;
} */

.search {
  position: absolute;
  top: 50px;
  right: 20px;
  width: fit-content;
}
input {
  width: fit-content;
  height: 40px;
  font-size: x-large;
}
</style>
