<template>
  <div class="home">
    <Greeting />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Greeting from '@/components/Greeting.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Greeting,
  },
});
</script>
