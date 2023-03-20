<template>
  <div class="collab-card">
    <div class="card">
      <h2 class="align-center">Target CUET 2024</h2>
      <!-- <img src="img_avatar.png" alt="Avatar" style="width:100%" /> -->
      <div class="container align-center mt-3">
        <h3><b>1000+ topic</b></h3>
        <h4>10000+ questions</h4>
        <p>Start your preperation with concept and practice</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "collab-card",
  setup() {},
};
</script>
<style scoped>
.card {
  transition: 0.3s;
  width: 400px;
  height: 400px;
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem;
  box-shadow: #ffb307c4;
  background-color: #ffea07bf;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}
.align-center {
  text-align: center;
}
.mt-5 {
  margin-top: 5rem;
}
.mt-3 {
  margin-top: 3rem;
}
p {
  color: #007bff;
}
</style>
