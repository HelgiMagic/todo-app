<script setup>
defineProps(['todo']);
</script>

<template>
  <li class="card">
    <button>Сделано</button>
    <p>{{ todo.name }}</p>
  </li>
</template>

<style scoped>
.card {
  background-color: var(--soft);
  list-style: none;
  border-radius: 10px;

  width: 500px;
  display: flex;

  color: white;
}
</style>
