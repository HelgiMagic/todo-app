<script setup>
import { ref } from 'vue';

defineProps(['todo']);

const cardClass = ref('card');
</script>

<template>
  <li :class="cardClass">
    <input type="checkbox" name="checkbox">
    <label for="checkbox">{{ todo.name }}</label>
  </li>
</template>

<style scoped>
.card {
  background-color: var(--soft);
  list-style: none;
  border-radius: 10px;

  width: 100%;
  margin: auto;

  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;

  color: white;
  position: relative;

  box-shadow: 3px 3px rgb(0 0 0 / 0.1),
              -3px -3px rgb(255 255 255 / 0.1);
}

button {
  height: 28px;
  width: 28px;
  border-radius: 50px;
  background-image: url('/public/unchecked.png');
  background-size: cover;
  background-position: center;
  margin-left: 5px;

  outline: none;
  border: 0;
}
.checked {
  text-decoration: line-through;
}

input {
  margin-left: 30px;
}
</style>
