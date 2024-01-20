// stores/counter.js
import { defineStore } from 'pinia';

const useCounterStore = defineStore('todos', {
  state: () => ({ todos: [] }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(deletingId) {
      const newTodos = this.todos.filter((todo) => todo.id !== deletingId);

      this.todos = newTodos;
    },
  },
});

export default useCounterStore;
