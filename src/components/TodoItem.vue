<script setup>
import { ref } from 'vue';
import useCounterStore from '../stores/todos';

const props = defineProps(['todo']);
const cardClass = ref('card');

const todosStore = useCounterStore();

const handleDelete = () => {
  todosStore.deleteTodo(props.todo.id);
};

</script>

<template>
  <li :class="cardClass">
    <div class="card__start">
      <input type="checkbox" name="checkbox">
      <label for="checkbox">{{ todo.name }}</label>
    </div>
    <button class="delete-btn" @click="handleDelete">
      <img src="/delete.svg" alt="" class="delete-icon">
    </button>
  </li>
</template>

<style scoped>
.card {
  background-color: var(--soft);
  list-style: none;
  border-radius: 19px;

  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: auto;

  min-height: 50px;

  white-space: normal;
  word-wrap: break-word;

  padding: 20px 30px;

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

.card__start {
  display: flex;
  gap: 20px;

  white-space: normal;
  word-wrap: break-word;
}

.delete-btn {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  height: 20px;
  width: 20px;

  margin: 0;
}
.delete-icon {
  width: 20px;
  height: 20px;
}

button {
  height: 28px;
  width: 28px;
  border-radius: 50px;
  background-image: url('/unchecked.png');
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
