<script setup>
import { ref } from 'vue';
import useCounterStore from '../stores/todos';

const props = defineProps(['todo']);
const cardClass = ref('card');

const todosStore = useCounterStore();

const handleDelete = () => {
  todosStore.deleteTodo(props.todo.id);
};

const handleArchive = () => {
  todosStore.archiveTodo(props.todo.id);
};

const handleUnarchive = () => {
  todosStore.unarchiveTodo(props.todo.id);
};

</script>

<template>
  <li :class="cardClass">
    <div class="card__space">
      <input type="checkbox" name="checkbox">
      <label for="checkbox" aria-multiline="true">{{ todo.name }}</label>
    </div>
    <div class="card__space">
      <button class="card-btn" @click="handleDelete" title="delete">
        <img src="/delete.svg" alt="" class="card-icon">
      </button>

      <button v-if="!props.todo.archived" class="card-btn" @click="handleArchive" title="archive">
        <img src="/archive.svg" alt="" class="card-icon">
      </button>
      <button v-else class="card-btn" @click="handleUnarchive" title="unarchive">
        <img src="/unarchive.svg" alt="" class="card-icon">
      </button>
    </div>
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

.card__space {
  max-width: 80%;
  display: flex;
  gap: 20px;

  white-space: normal;
  word-wrap: break-word;
}

.card-btn {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  height: 20px;
  width: 20px;

  margin: 0;
}
.card-icon {
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
  label {
    max-width: 75%;
  }
}
</style>
