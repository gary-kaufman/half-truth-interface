<template>
  <div class="home">
    <h1 id="welcome">Welcome to the Half Truth Interface!</h1>
    <DieRoll/><br/>
    <AnswerOptions/>
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
export default class MasterView extends Vue {}
</script>

<style>
#welcome {
  color: white; 
  background-color: #d91f28;
  padding: 5px;
  width: 100%;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}

</style>