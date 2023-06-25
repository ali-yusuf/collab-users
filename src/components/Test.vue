<template>
  <div id="test">
    Welocme to test page bro... <br />
    you can get the test series from this page only.. Solve the following
    questions..
    <!-- <Button id="fetch" v-on:click="fetchData" text="FetchData" color="green" /> -->

    <div class="questions">
      <ol class="content-block">
        <li v-for="task in mutableList" :key="task.id">
          <p>
            <strong>{{ task.question }}</strong>
          </p>
          <input
            type="radio"
            id="{{task.A}}"
            value="A"
            v-model="capital[task.id]"
            :checked="false"
          />
          <label for="{{task.A}}"> {{ task.A }}</label>
          <input
            type="radio"
            id="{{task.B}}"
            value="B"
            v-model="capital[task.id]"
            :checked="false"
          />
          <label for="{{task.B}}"> {{ task.B }}</label>
          <input
            type="radio"
            id="{{task.C}}"
            value="C"
            v-model="capital[task.id]"
            :checked="false"
          />
          <label for="C"> {{ task.C }}</label>
          <input
            type="radio"
            id="{{task.D}}"
            value="D"
            v-model="capital[task.id]"
            :checked="false"
          />
          <label for="{{task.D}}"> {{ task.D }}</label>

          <!-- <h3>{{ capital[task.id] }}</h3> -->
          <!-- <div v-if="capital[task.id]"> -->
          <!-- <p>condition to check wether ans is correct or wrong</p>
        <div v-if="task.answer == capital[task.id]">
          <p>
            your answer : {{ capital[task.id] }}<br />
            correct answer: {{ task.answer }}<br />
            marsks obtained: 2.0
          </p>
        </div> -->
          <p v-if="capital[task.id]">
            your answer: {{ capital[task.id] }}
            <span style="color: green;">correct answer: {{ task.answer }}</span>
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
// import Button from "./Button.vue";
export default defineComponent({
  // setup() {
  // },
  // components: { Button },
  name: "Test",

  data() {
    return {
      mutableList: [
        {
          id: 1,
          question: "Capital of India",
          A: "Lonow",
          B: "Lonow",
          C: "Lonow",
          D: "Delhi",
          answer: "D",
        },
        {
          id: 2,
          question: "Capital of UP",
          A: "Lonow",
          B: "Lucknow",
          C: "Lonow",
          D: "Delhi",
          answer: "B",
        },
      ],
      capital: [],
      count: 0,
      //clicked: false,
    };
  },
  props: {
    users: Array,
  },
  methods: {
    //Fetch Method get data from API
    // fetchData() {
    //   fetch("http://localhost:2000/computerquize")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.mutableList = data;
    //     })
    //     .catch((err) => console.log(err.meassage));
    //   this.answer = this.mutableList.answer;
    // },
    incrementCounter: function() {
      this.count += 1;
    },
  },
});
</script>
<style scoped>
label {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
