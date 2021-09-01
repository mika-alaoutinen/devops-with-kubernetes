<template>
  <div class="home">
    <Image />
    <Input />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Image from '@/components/Image.vue';
import Input from '@/components/Input.vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'Home',
  components: { Image, Input, TodoList },
});
</script>
