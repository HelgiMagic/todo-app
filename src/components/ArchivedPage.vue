<script setup>
import { computed } from 'vue';
import TodoItem from './TodoItem.vue';
import useCounterStore from '../stores/todos';

const todosStore = useCounterStore();

const archivedTodos = computed(() => todosStore.archivedTodos);
const activeTodos = computed(() => (
  todosStore.todos.filter((todo) => archivedTodos.value.includes(todo.id))
));
</script>

<template>
  <h1>Archive</h1>
  <div class="container">
    <ul class="items-container">
      <p v-if="activeTodos.length < 1">Archive is clear</p>
      <TodoItem v-for="todo in activeTodos" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<style scoped>
p {
  color: white;
}
</style>
