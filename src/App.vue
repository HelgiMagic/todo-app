<script setup>
</script>

<template>
  <nav>
    <router-link to="/" class="nav-link first">Home</router-link>
    <div class="border"></div>
    <router-link to="/archive" class="nav-link">Archive</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  background-color: var(--soft);
  width: 300px;
  height: 40px;

  margin: auto;
  margin-top: 50px;
  color: white;
  border-radius: 20px;
}
.nav-link {
  text-decoration: none;
  color: white;
}

.first {
  position: relative;
}

.border {
  width: 1px;
  height: 40%;
  background-color: rgb(255 255 255 / 0.3)
}
/* .first::after {
  content: "";
  position: absolute;
  top: 0;
  right: -30px;
  border-right: black 1px solid;
  height: 30px;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
} */
</style>
