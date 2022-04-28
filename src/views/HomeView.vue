<template>
  <div class="home">
    <h1>Welcome to the Half Truth Game Interface!</h1>
    <DieRoll/>
    <AnswerOptions/>
    <h1>Player Scores</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DieRoll from '@/components/DieRoll.vue';
import AnswerOptions from '@/components/AnswerOptions.vue';

@Options({
  components: {
    DieRoll,
    AnswerOptions
  },
})
export default class HomeView extends Vue {}
</script>
