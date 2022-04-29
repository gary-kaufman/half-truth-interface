<template>
  <div class="root">
    <h1 id="question">{{ question }}</h1>
    <hr/>
    <div id="grid_container">
        <div id="A" class="answer" v-bind:style='{"background-color" : (isACorrect? "#7ab342" : "white" )}' @click="isACorrectToggle()">{{ A }}</div>
        <div id="B" class="answer" v-bind:style='{"background-color" : (isBCorrect? "#7ab342" : "white" )}' @click="isBCorrectToggle()">{{ B }}</div>
        <div id="C" class="answer" v-bind:style='{"background-color" : (isCCorrect? "#7ab342" : "white" )}' @click="isCCorrectToggle()">{{ C }}</div>
        <div id="F" class="answer" v-bind:style='{"background-color" : (isFCorrect? "#7ab342" : "white" )}' @click="isFCorrectToggle()">{{ F }}</div>
        <div id="E" class="answer" v-bind:style='{"background-color" : (isECorrect? "#7ab342" : "white" )}' @click="isECorrectToggle()">{{ E }}</div>
        <div id="D" class="answer" v-bind:style='{"background-color" : (isDCorrect? "#7ab342" : "white" )}' @click="isDCorrectToggle()">{{ D }}</div>
    </div>
    <caption>Click an answer to mark it as correct!</caption>
    <button @click="openNewQuestion">New Question</button>
    <teleport to='body'>
        <Transition>
            <div class="modal-container" v-if="newQuestion">
                <div class="modal">
                    <h1 style="text-align: center; padding: 2px">New Question</h1>
                    <input placeholder="Question" v-model="question"/><br/>
                    <input placeholder="A" v-model="A"/><br/>
                    <input placeholder="B" v-model="B"/><br/>
                    <input placeholder="C" v-model="C"/><br/>
                    <input placeholder="D" v-model="D"/><br/>
                    <input placeholder="E" v-model="E"/><br/>
                    <input placeholder="F" v-model="F"/><br/>
                    <button @click="newQuestion = false" style="float: right; margin: 10px; border: none; background: none;">✔️</button>
                </div>
            </div>
        </Transition>
    </teleport>
  </div>
</template>

<script lang=ts>
import { Vue } from "vue-class-component"

export default class AnswerOptions extends Vue {
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

    newQuestion = false;
    question = "Question";
    A = "A";
    B = "B";
    C = "C";
    D = "D";
    E = "E";
    F = "F";

    openNewQuestion(): void{
        
        this.newQuestion = true;
        this.question = "";
        this.A = "";
        this.B = "";
        this.C = "";
        this.D = "";
        this.E = "";
        this.F = "";
    }
}
</script>

<style>
.root{
    position: relative;
}

hr {
    margin: 10px auto;
    color: #7ab342;
    width: 70%;
}
caption {
    margin: 5px auto;
    width: 100%;
}
button {
    border-radius: 2px;
    padding: 10px 20px;
    font-size: 20px;
}

input {
    margin: 10px;
    padding: 5px;
    width: 97%;
    height: 40px;
    font-size: 20px;
}
.modal-container{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(91, 91, 91);
    width: 100%;
    height: 100%;
}

.modal {
    background-color: rgba(255, 255, 255, 0.898);
    border-radius: 5px;
    width: 75%;
    height: 90%;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: auto;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#grid_container {
    margin: auto;
    justify-content: center;
    display: grid;
}

.correct {
    background-color: green;
}

.answer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.259);
    border-radius: 2px;
    width: 400px;
    height: 50px;
    font-size: 20px;
}

#question {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #31b2d7;
    border-radius: 2px;
    margin: auto;
    width: 630px;
    height: 100px;
}

#A {
    grid-column: 1;
    grid-row: 2;
}

#B {
    grid-column: 1;
    grid-row: 3;
}

#C {
    grid-column: 1;
    grid-row: 4;
}

#D {
    grid-column: 2;
    grid-row: 4;
}

#E {
    grid-column: 2;
    grid-row: 3;
}

#F {
    grid-column: 2;
    grid-row: 2;
}
</style>