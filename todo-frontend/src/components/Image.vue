<template>
  <h1>A random image</h1>
  <img :src="imgSource" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import imageService from '@/services/imageService';

export default defineComponent({
  name: 'Greeting',
  data() {
    return {
      imgSource: '',
    };
  },
  async mounted() {
    this.imgSource = await imageService.fetchImage();
  },
});
</script>
