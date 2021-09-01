<template>
  <div class="home">
    <Image />
    <Todos />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Image from '@/components/Image.vue';
import Todos from '@/views/Todos.vue';

export default defineComponent({
  name: 'Home',
  components: { Image, Todos },
});
</script>
