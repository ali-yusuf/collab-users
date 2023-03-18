<template>
  <div id="test">
    Welocme to test page bro... <br />
    you can get the test series from this page only.. Solve the following
    questions..
    <Button id="fetch" v-on:click="fetchData" text="FetchData" color="green" />

    <div class="questions">
      <li v-for="task in mutableList" :key="task.id">
        <p>{{ task.question }}</p>
        <input
          type="radio"
          id="{{task.A}}"
          value="A"
          v-model="capital[task.id]"
        />
        <label for="{{task.A}}"> {{ task.A }}</label>
        <input
          type="radio"
          id="{{task.B}}"
          value="B"
          v-model="capital[task.id]"
        />
        <label for="{{task.B}}"> {{ task.B }}</label>
        <input
          type="radio"
          id="{{task.C}}"
          value="C"
          v-model="capital[task.id]"
        />
        <label for="C"> {{ task.C }}</label>
        <input
          type="radio"
          id="{{task.D}}"
          value="D"
          v-model="capital[task.id]"
        />
        <label for="{{task.D}}"> {{ task.D }}</label>
        <h3>{{ capital[task.id] }}</h3>
        <div v-if="task.answer == capital[task.id]" this.thincrementCounter>
          Correct answer, Your score is {{ count }}
        </div>

        <!-- <h3 v-if="capital[task.id] == task.answer>true</h3>
                <h3 v-else > false</h3> -->
        <br />
        <br />
        <p>{{ answer }}</p>
      </li>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import Button from "./Button.vue";
export default defineComponent({
  // setup() {
  // },
  components: { Button },
  name: "Test",

  data() {
    return {
      mutableList: [],
      capital: [],
      answer: "",
      count: 0,
    };
  },
  props: {
    users: Array,
  },
  methods: {
    //Fetch Method get data from API
    fetchData() {
      fetch("http://localhost:2000/computerquize")
        .then((res) => res.json())
        .then((data) => {
          this.mutableList = data;
        })
        .catch((err) => console.log(err.meassage));
      this.answer = this.mutableList.answer;
    },
  },
  incrementCounter: function() {
    this.count += 1;
  },
});
</script>
<style scoped>
.questions {
  margin-left: 20px;
}
</style>
