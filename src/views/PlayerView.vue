<template>
  <div class="about">
    <h3 id="welcome">Welcome to the Half Truth Interface!</h3>
    <h3>Select your answers below!</h3>
    <hr/>
    <div id="grid_container">
        <div id="A" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isACorrect? "#31b2d7" : "white" )}' @click="isACorrectToggle()">{{ A }}</div>
        <div id="F" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isFCorrect? "#31b2d7" : "white" )}' @click="isFCorrectToggle()">{{ F }}</div>
        <div id="B" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isBCorrect? "#31b2d7" : "white" )}' @click="isBCorrectToggle()">{{ B }}</div>
        <div id="E" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isECorrect? "#31b2d7" : "white" )}' @click="isECorrectToggle()">{{ E }}</div>
        <div id="C" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isCCorrect? "#31b2d7" : "white" )}' @click="isCCorrectToggle()">{{ C }}</div>
        <div id="D" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isDCorrect? "#31b2d7" : "white" )}' @click="isDCorrectToggle()">{{ D }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class PlayerView extends Vue {
    A = "A";
    B = "B";
    C = "C";
    D = "D";
    E = "E";
    F = "F";

    isACorrect = false;
    isACorrectToggle(): void { this.isACorrect ? this.isACorrect = false : this.isACorrect = true; }
    isBCorrect = false;
    isBCorrectToggle(): void { this.isBCorrect ? this.isBCorrect = false : this.isBCorrect = true; }
    isCCorrect = false;
    isCCorrectToggle(): void { this.isCCorrect ? this.isCCorrect = false : this.isCCorrect = true; }
    isDCorrect = false;
    isDCorrectToggle(): void { this.isDCorrect ? this.isDCorrect = false : this.isDCorrect = true; }
    isECorrect = false;
    isECorrectToggle(): void { this.isECorrect ? this.isECorrect = false : this.isECorrect = true; }
    isFCorrect = false;
    isFCorrectToggle(): void { this.isFCorrect ? this.isFCorrect = false : this.isFCorrect = true; }
}
</script>

<style>
#grid_container {
    margin: auto;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

hr {
    margin: 10px 10px;
    color: #7ab342;
    min-width: 90%;
    height: 3px;
    background-color: #7ab342;
}

#welcome {
  color: white; 
  background-color: #d91f28;
  padding: 0.3em;
  width: 90%;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
</style>