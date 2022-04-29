<template>
  <nav>
    <router-link to="/">Master View</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/player-view">Player View</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class App extends Vue {
  created() {
    if (window.screen.width < 601) {
      this.$router.push('/player-view')
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  margin: auto;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #31b2d7;
}
</style>
