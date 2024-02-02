// stores/counter.js
import { defineStore } from 'pinia';

const useCounterStore = defineStore('todos', {
  state: () => ({ todos: [], archivedTodos: [] }),
  persist: {
    key: 'my-custom-key',
  },
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(deletingId) {
      const newTodos = this.todos.filter((todo) => todo.id !== deletingId);
      this.unarchiveTodo(deletingId);

      this.todos = newTodos;
    },
    archiveTodo(archivingId) {
      const elem = this.todos.find((todo) => todo.id === archivingId);
      elem.archived = true;

      this.archivedTodos.push(archivingId);
    },
    unarchiveTodo(unarchivingId) {
      const elem = this.todos.find((todo) => todo.id === unarchivingId);
      elem.archived = false;

      const newArchived = this.archivedTodos.filter((id) => id !== unarchivingId);
      this.archivedTodos = newArchived;
    },
  },
});

export default useCounterStore;
