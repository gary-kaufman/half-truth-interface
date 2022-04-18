<template>
  <div class="home">
    <h1>Welcome to the Half Truth Game Interface!</h1>
    <DieRoll/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DieRoll from '@/components/DieRoll.vue'

@Options({
  components: {
    DieRoll
  },
})
export default class HomeView extends Vue {}
</script>
