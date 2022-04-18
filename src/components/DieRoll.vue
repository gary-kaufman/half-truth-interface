<template>
  <div>
      <button @click="roll">Roll Die</button>
      <p>rolled die value = {{ rollResult }}</p>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class DieRoll extends Vue {
    rollResult = 0;

    roll() {
        this.rollResult = Math.floor(Math.random() * 6) + 1;
    }
}
</script>

<style>

</style>