<template>
  <div class="grid_container">
      <div id="A">A Answer</div>
      <div id="B">B Answer</div>
      <div id="C">C Answer</div>
      <div id="D">D Answer</div>
      <div id="E">E Answer</div>
      <div id="F">F Answer</div>
  </div>
</template>

<script lang=ts>
import { Vue } from "vue-class-component"

export default class AnswerOptions extends Vue {

}
</script>

<style>
.grid_container {
    margin: auto;
    display: grid;
}

#A, #B, #C, #D, #E, #F {
    border: 1px solid black;
}

#A, #B, #C {
    grid-column: 1;
}

#D, #E, #F {
    grid-column: 2;
}
</style>