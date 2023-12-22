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
  border-radius: 19px;

  width: 100%;
  margin: auto;

  min-height: 50px;

  white-space: normal;
  word-wrap: break-word;

  padding: 20px 0;

  display: flex;
  align-items: center;
  gap: 20px;

  color: white;
  position: relative;

  box-shadow: 3px 3px 10px rgb(0 0 0 / 0.1),
  -3px -3px 10px rgb(185 185 185 / 0.1);
}

label {
  max-width: 90%;
  display: block;

  text-align: start;
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
  accent-color: #db3445;
}

@media (max-width: 1000px) {
  .form, .items-container {
    width: 98%;
  }

  label {
    max-width: 75%;
  }
}
</style>
