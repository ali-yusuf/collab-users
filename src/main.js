//import { Router } from 'express'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*new Vue({

    router,
    render: h => (App)
}).$mount('#app')*/
createApp(App).use(router).mount('#app')


/*import App from "./App.vue";

const app = createApp(App);

app.mount("#app");*/