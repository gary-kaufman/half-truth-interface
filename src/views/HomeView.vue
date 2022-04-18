<template>
  <div class="home">
    <DieRoll/>
<!--     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import DieRoll from '@/components/DieRoll.vue'

@Options({
  components: {
    HelloWorld,
    DieRoll
  },
})
export default class HomeView extends Vue {}
</script>
