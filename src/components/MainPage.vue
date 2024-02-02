<script setup>
import { ref, computed } from 'vue';
import TodoItem from './TodoItem.vue';
import useCounterStore from '../stores/todos';

const text = ref('');

const todosStore = useCounterStore();
let id = todosStore.todos.length > 0 ? todosStore.todos.at(-1).id : -1;
console.log(id);

const handleSubmit = (e) => {
  e.preventDefault();
  id += 1;

  todosStore.addTodo({
    name: text.value,
    archived: false,
    id,
  });

  text.value = '';
};

const archivedTodos = computed(() => todosStore.archivedTodos);
const activeTodos = computed(() => (
  todosStore.todos.filter((todo) => !archivedTodos.value.includes(todo.id))
));
console.log(archivedTodos.value, activeTodos.value);
</script>

<template>
  <h1>Todo list</h1>
  <div class="container">
    <form action="" class="form" @submit="handleSubmit">
      <input type="text" v-model="text" placeholder="New to do" required/>
      <button class="button-36">Add todo</button>
    </form>
    <ul class="items-container">
      <TodoItem v-for="todo in activeTodos" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<style scoped>
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

  border: none;
  border-radius: 20px;

  outline: none;

  margin-right: 10px;
}
</style>
