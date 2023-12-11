<script setup>
import { ref } from 'vue';

defineProps(['todo']);

const cardClass = ref('card');
</script>

<template>
  <li :class="cardClass">
    <div class="round">
      <input type="checkbox" checked id="checkbox" />
      <label for="checkbox"></label>
    </div>
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
  align-items: center;
  gap: 20px;

  color: white;
  position: relative;
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

.checked button {
  background-image: url('/public/checked.png');
}

.round {
  margin-left: 15px;
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: '';
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type='checkbox']:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type='checkbox']:checked + label:after {
  opacity: 1;
}
</style>
