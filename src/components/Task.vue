<template>
<div class = "user">

<h3>{{task.text}} </h3>
<p>{{task.email}} </p>

</div>
</template>

<script>


export default {
    name:'Task',
    props:{
        task: Object
    }
}
</script>
<style scoped>
.user{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: darkgray;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>
