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
  height: 50px;

  margin: auto;
  margin-top: 50px;
  color: white;
  border-radius: 20px;
}

.nav-link {
  text-decoration: none;
  color: white;
}

.router-link-active {
  border-bottom: 1px solid #f31b37;
}

.first {
  position: relative;
}

.border {
  width: 1px;
  height: 40%;
  background-color: rgb(255 255 255 / 0.3)
}

@media (max-width: 1000px) {
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;

    z-index: 2;
    border-radius: 0;
  }
}
</style>
