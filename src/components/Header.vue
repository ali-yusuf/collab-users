<template>
  <header>
    <!-- <h1>{{ title }}</h1>
    <h2>{{show}}</h2>
    <h2>{{sh}}</h2> -->

    <Button id="home" v-on:click = "home" text="Home" color = "green" />
    <Button id="subject" v-on:click = "subject" text="SUBJECTS" color = "green" />
    <Button id="test" v-on:click = "test" text="TEST" color = "green" />
    <Button id="about" v-on:click = "aboutus" text="About Us" color = "green" />
    <Button id = "login" text="Login" @click = "login" color = "green"/>
    <Button id ="signup" text="Signup"  v-on:click = "signup" color = "green" />

     <!-- This section of code is used to make it single page application, You can call a component over it
    <component v-bind:is="component"></component>
    <Button id="home" v-on:click = "component = 'Header' " text="TEST" color = "green" />
    <Button id="home" v-on:click = "component = 'Header' " text="About Us" color = "green" />
    <Button id = "login" text="Login" @click = "home" color = "green"/>
     -->
    <!-- <PostCpmponent v-on:isVisible ="onclickChild($event)"/> -->
    <!-- <Button :text="login ? 'Close' : 'login'"
      :color="showAddTask ? 'red' : 'green'"
    /> -->
  </header>
</template>

<script>
import Button from './Button'
//import PostComponent from './PostComponent'
//import navbar from './navbar'
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'Header',
   
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
  data(){
    return{
      component:'',
      show:true,
      sh:'hii'
    }
  },
  methods:{
   onclickChild(show)
   {
    
     this.show = show
     if(!this.$forceUpdate)
     {
       this.sh = "updated"
     }
     alert(this.show)
   },
   home(){
    this.$router.push({path:'/'});
   },
   signup(){
      this.$router.push({ path: '/signup' });

   },
    subject(){
      this.$router.push({ path: '/subject' });
   },
    test(){
      this.$router.push({ path: '/test' });
   },
    aboutus(){
      this.$router.push({ path: '/aboutus' });
   },
   login(){
      this.$router.push({ path: '/login' });
   },
   close(){
    this.$router.push({path:'/'});
   },
   
  }
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
header {
  display: flex;
  /* justify-content: space-between; */
  align-items: left;
  margin-left: 600px;
  /* margin-bottom: 10px; */
  
}
#login{
    position: fixed;
    top: 0px;
    right:200px ;
}
#signup{
  flex: 10px;
  position: fixed;
  top: 0px;
  right: 60px;
}
#login:hover{
text-decoration: underline;
}
#signup:hover{
text-decoration: underline;
}
#subject:hover{
text-decoration: underline;
}
#test:hover{
text-decoration: underline;
}
#about:hover{
text-decoration: underline;
}
#home:hover{
text-decoration: underline;
}
/* #home{
  position: fixed;
  top: 50px;
  left: 200px;
}  */

</style>