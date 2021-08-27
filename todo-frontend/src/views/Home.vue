<template>
  <div class="home">
    <Greeting />
    <Image />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Greeting from '@/components/Greeting.vue';
import Image from '@/components/Image.vue';

export default defineComponent({
  name: 'Home',
  components: { Greeting, Image },
});
</script>
