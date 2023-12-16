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
      <input type="text" v-model="text" placeholder="New to do" required/>
      <button class="button-36">Add todo</button>
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
  max-width: 1250px;
  height: 80vh;

  margin: auto;
}

.form {
  margin-top: 50px;

  display: flex;
  height: 64px;
  justify-content: center;

  width: 70%;
}

.items-container {
  color: black;

  width: 70%;
  padding: 0 20px;

  margin-top: 50px;
  display: flex;
  flex-direction: column;

  gap:20px;
}

input {
  display: block;

  max-width: 100%;
  width: 100%;
  flex-shrink: 1;

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;

  color: white;
  background-clip: padding-box;
  background-color: var(--soft);

  border: 1px solid rgb;
  border-radius: 20px;

  outline: none;

  margin-right: 10px;
}

button {
  background-image: linear-gradient(147deg, #f71735 0%, #db3445 74%);
  border-radius: 8px;
  border-style: none;

  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 500;

  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;

  box-shadow: 0 0 0.5em rgb(219 52 69 / 0.4),
  0 0 transparent,
  inset 0 -5px 0 rgba(0,0,0,0.05),
  inset 0 2px 0 rgba(255,255,255,0.2);
}

button:hover {
  box-shadow: .5px .8px 1.3px rgb(219 52 69 / .12),
  2px 3.4px 5.3px -.3px rgb(219 52 69 / .21),
  4.3px 7.2px 11.3px -.7px rgb(219 52 69 / .31),
  9.3px 15.6px 24.5px -1px rgb(219 52 69 / .4);
}

@media (max-width: 1000px) {
  .form, .items-container {
    width: 98%;
  }
}

</style>
