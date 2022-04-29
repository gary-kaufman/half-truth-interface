<template>
  <div class="root">
    <h1 id="question">{{ question }}</h1><br/>
    <div id="grid_container">
        <div id="A" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isACorrect? "#7ab342" : "white" )}' @click="isACorrectToggle()">{{ A }}</div>
        <div id="F" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isFCorrect? "#7ab342" : "white" )}' @click="isFCorrectToggle()">{{ F }}</div>
        <div id="B" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isBCorrect? "#7ab342" : "white" )}' @click="isBCorrectToggle()">{{ B }}</div>
        <div id="E" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isECorrect? "#7ab342" : "white" )}' @click="isECorrectToggle()">{{ E }}</div>
        <div id="C" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isCCorrect? "#7ab342" : "white" )}' @click="isCCorrectToggle()">{{ C }}</div>
        <div id="D" class="answer" style="background-clip: padding-box;" v-bind:style='{"background-color" : (isDCorrect? "#7ab342" : "white" )}' @click="isDCorrectToggle()">{{ D }}</div>
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
                    <button @click="newQuestion = false" style="border: none; background: none;">✔️</button>
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
    A = "Answer A";
    B = "Answer B";
    C = "Answer C";
    D = "Answer D";
    E = "Answer E";
    F = "Answer F";

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
caption {
    justify-content: center;
    align-self: center;
    margin: 1em auto;
    min-width: 100%;
}
button {
    border-radius: 2px;
    padding: 0.5em;
    font-size: 15px;
}

input {
    margin: 3px;
    padding: 1em;
    min-width: 80%;
    font-size: 15px;
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
    position: absolute;
    top: 5%;
    left: 25%;
    min-width: 50%;
    max-width: 100%;
    min-height:400px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.898);
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    align-self: center;
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
    grid-template-columns: 1fr 1fr;
}

.answer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    height: 30px;
    font-size: 30px;
    user-select: none;
}

#question {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 5px;
    min-width: 100%;
    min-height: 60px;
    color: white;
    background-color: #31b2d7;
    border-radius: 2px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-style: solid;
    border-bottom-color: #7ab342;
    border-bottom-width: 100%;
}

#A {
    border-style: none solid solid none;
    border-color: rgba(0, 0, 0, 0.259);
    border-width: 3px ;
}

#B {
    border-style: solid solid solid none;
    border-color: rgba(0, 0, 0, 0.259);
    border-width: 3px ;
}

#C {
    border-style: solid solid none none;
    border-color: rgba(0, 0, 0, 0.259);
    border-width: 3px ;
}

#D {
    border-style: solid none none solid;
    border-color: rgba(0, 0, 0, 0.259);
    border-width: 3px ;
}

#E {
    border-style: solid none solid solid;
    border-color: rgba(0, 0, 0, 0.259);
    border-width: 3px ;
}

#F {
    border-style: none none solid solid;
    border-color: rgba(0, 0, 0, 0.259);
    border-width: 3px ;
}
</style>