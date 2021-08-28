<template>
  <div class="home">
    <Greeting />
    <Image />
    <Input />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Greeting from '@/components/Greeting.vue';
import Image from '@/components/Image.vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'Home',
  components: { Greeting, Image, Input },
});
</script>
