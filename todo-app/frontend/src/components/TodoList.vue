<template>
  <div class="todo-list-container">
    <ul class="todo-list">
      <li class="todo-item">Todo 1</li>
      <li class="todo-item">Todo 2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList',
});
</script>

<style>
.todo-item {
  font-size: large;
}
.todo-list {
  color: red;
  text-align: left;
}
.todo-list-container {
  display: flex;
  justify-content: center;
}
</style>
