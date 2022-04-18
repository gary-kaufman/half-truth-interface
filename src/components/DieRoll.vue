<template>
  <div>
      <h1 @click="roll" id="die">{{ rollResult }}</h1>
      <caption id="rollDescription">{{ rollDescription }}</caption>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class DieRoll extends Vue {
    rollResult = "";
    rollDescription = "";

    roll(): void{
        document.querySelector("#die")?.classList.add("roll");
        this.rollDescription = "";
        setTimeout(() => {
        let result = Math.floor(Math.random() * 6) + 1;
        if (result == 1) {
            this.rollResult = "1"
            this.rollDescription = "Move 1 space if you get all correct answers this round!"
            document.querySelector("#die")?.classList.remove("special");
            }
        if (result == 2) {
            this.rollResult = "2"
            this.rollDescription = "Move 2 space if you get all correct answers this round!"
            document.querySelector("#die")?.classList.remove("special");
            }
        if (result == 3) {
            this.rollResult = "3"
            this.rollDescription = "Move 3 space if you get all correct answers this round!"
            document.querySelector("#die")?.classList.remove("special");
            }
        if (result == 4) {
            this.rollResult = "4"
            this.rollDescription = "Move 4 space if you get all correct answers this round!"
            document.querySelector("#die")?.classList.remove("special");
            }
        if (result == 5) {
            this.rollResult = "+1";
            this.rollDescription = "Bonus Points are DOUBLED! Move 1 space if you get all correct answers this round!"
            document.querySelector("#die")?.classList.add("special");
        }
        if (result == 6) {
            this.rollResult = "¡2!"
            this.rollDescription = "Move 2 space if you get all INCORRECT answers this round!"
            document.querySelector("#die")?.classList.add("special")
        }
        document.querySelector("#die")?.classList.remove("roll");
        }, 1000)
    }

    mounted() {
        this.roll()
    }
}
</script>

<style>
#die {
    display:block;
    text-align: center;
    margin: auto;
    line-height: 50px;
    height: 50px;
    width: 50px;
    border: 2px solid black;
    border-radius: 3px;
}

caption {
    display: block;
    margin-top: 10px;
}

.hide {
    display: none;
    margin-top: 10px;
}

.special {
    color: rgb(1, 172, 1);
}

.roll {
    animation: roll 0.3s infinite;
}

@keyframes roll {
    0% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(-180deg);
    }
    100% {
        transform: rotate(180deg);
    }
}
</style>