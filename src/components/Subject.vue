<template>
  <div id="subject">
    <button
      class="btn-search btn-primary btn-block"
      v-on:click="main()"
      type="submit"
    >
      Ask anything..
    </button>
    <div v-if="started" class="search">
      <textarea
        type="text"
        id="searchIten"
        v-model="search"
        placeholder="Enter or paste topic to learn"
      >
      </textarea>
      <button
        class="btn-send btn-primary btn-block"
        v-on:click="send()"
        type="submit"
      >
        send
      </button>
      <button
        class="btn-exit btn-primary btn-block"
        v-on:click="exit()"
        type="submit"
      >
        Exit
      </button>
    </div>
    <div class="content">
      <p>Answer:</p>
      <p class="answer">{{ completionText }}</p>
    </div>
    <!--<Button id="fetch" v-on:click="fetchData" text="Click Here" color="green" />-->

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
//import readlineSync from "readline-sync";
import openai from "/config/open-ai.js";
import colors from "colors";

export default {
  components: {},
  // setup() {
  name: "Subject",
  data() {
    return {
      components: [],
      search: "",
      check: "true",
      completionText: "",
      chatHistory: [],
      messages: "",
      completion: "",
      started: false,
    };
  },
  computed: {
    // conversation() {
    //   return this.main();
    // },
  },
  methods: {
    // Incomplete method to implement a search bar

    send() {},
    exit() {
      this.search = "Exit";
      this.started = false;
      console.log(this.search);
    },
    async main() {
      this.started = true;
      console.log(colors.bold.green("Welcome to the Chatbot Program!"));
      console.log(colors.bold.green("You can start chatting with the bot."));

      // Store conversation history
      while (this.check) {
        //const userInput = readlineSync.question(colors.yellow("You: "));

        try {
          // Construct messages by iterating over the history
          this.messages = this.chatHistory.map(([role, content]) => ({
            role,
            content,
          }));

          // Add latest user input
          this.messages.push({ role: "user", content: this.search });

          // Call the API with user input & history
          this.completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: this.messages,
          });

          // Get completion text/content
          this.completionText = this.completion.data.choices[0].message.content;

          if (this.search.toLowerCase() === "exit") {
            // console.log(colors.green("Bot: ") + this.completionText);
            return;
          }

          //console.log(colors.green("Bot: ") + this.completionText);

          // Update history with user input and assistant response
          this.chatHistory.push(["user", this.search]);
          this.chatHistory.push(["assistant", this.completionText]);
        } catch (error) {
          console.error(colors.red(error));
        }
      }
    },
  },
};
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
  top: 140px;
  left: 10px;
  height: 100%;
  width: 100%;
}
textarea {
  width: 400px;
  height: 200px;
}
.btn-search {
  position: absolute;
  margin-top: 30px;
  width: 300px;
  margin-left: 30px;
}
.btn-send {
  position: absolute;
  margin-top: 20px;
  width: 100px;
  margin-left: 280px;
}
.btn-exit {
  position: absolute;
  margin-top: 20px;
  width: 100px;
  margin-left: 10px;
}
.content {
  position: absolute;
  display: flex;
  left: 450px;
  margin-top: 85px;
  width: fit-content;
  height: fit-content;
  border-radius: 1px;
  border: 1px solid;
  padding: 10px;
  min-width: 200px;
  min-height: 200px;
}
.answer {
  margin-top: 30px;
}
</style>
