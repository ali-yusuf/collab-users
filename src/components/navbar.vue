<template>
    <nav>
        <Header/>
    </nav>


    
</template>
<script>
import { defineComponent } from '@vue/runtime-core'
import Header from './Header.vue'


export default defineComponent({
  components: { Header },
        name:'navbar'
});
</script>
<style scoped>

</style>