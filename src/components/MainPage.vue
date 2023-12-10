<script setup>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);
const text = ref('');
let id = 0;

const handleSubmit = (e) => {
  e.preventDefault();
  todos.value.push({
    name: text.value,
    done: false,
    id,
  });

  text.value = '';
  id += 1;
};
</script>

<template>
  <h1>Todo list</h1>
  <div class="container">
    <form action="" class="form" @submit="handleSubmit">
      <input type="text" v-model="text" placeholder="Новое дело" />
      <button>Добавить</button>
    </form>
    <ul class="items-container">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  margin: auto;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1250px;
  height: 80vh;
}

.form {
  margin-top: 50px;

  display: flex;
  height: 46px;
}

.items-container {
  color: black;
}

input {
  display: block;

  max-width: 100%;
  width: 228px;

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;

  color: white;
  background-clip: padding-box;
  background-color: var(--soft);

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 20px;

  outline: none;

  margin-right: 10px;
}

button {
  background-color: #42b883;
  border-radius: 8px;

  height: 100%;

  outline: none;
  border: 0;

  font-weight: 600;
}

.items-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  gap:10px;
}
</style>
