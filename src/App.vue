<template>
  <div id="app">
    <InputCard/>
    <DisplayCard/>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import InputCard from "./components/InputCard";
import DisplayCard from "./components/DisplayCard";

export default {
  name: "App",
  components: {
    Counter,
    InputCard,
    DisplayCard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
