<template>
  <div class="home">
    <Greeting />
    <Image />
    <Input />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Greeting from '@/components/Greeting.vue';
import Image from '@/components/Image.vue';
import Input from '@/components/Input.vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Greeting,
    Image,
    Input,
    TodoList,
  },
});
</script>
