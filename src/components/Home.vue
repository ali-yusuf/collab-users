<template>
  <div id="home">
    <h1>Welocome to Collab learn.</h1>
    <p>your code will appear here</p>
    <div class="row">
      <div class="col-md-4">
        <collab-card />
      </div>
      <div class="col-md-4">
        <collabCard />
      </div>
      <div class="col-md-4">
        <collabCard />
      </div>
    </div>
  </div>
</template>
<script>
//import { defineComponent } from 'vue'     //'@vue/composition-api';

import { defineComponent } from "@vue/runtime-core";
import collabCard from "./collab-card.vue";

export default defineComponent({
  // setup() {
  // },
  name: "Home",
  components: {
    collabCard,
  },
});
</script>
<style scoped>
#home {
  background-color: white;
}
h1 {
  text-align: center;
}
</style>
