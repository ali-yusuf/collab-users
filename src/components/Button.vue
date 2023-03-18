<template>
    <button v-on:click = "onClick()" :style="{background:color}" class ="btn"> {{text}} </button>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
//const client = require('./database');

export default {
   name:'Button',

   props:{
 text: String,
 color: String
   },

   methods:{
       onClick(){
           //console.log('login');
           

          // alert("you have pressed login.")
       }
   }
}
</script>
