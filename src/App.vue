<template>
  <div>
    <char v-for="(char, ind) in chars" :key="ind" :char="char" />
  </div>
</template>

<script>
import chars from "./chars";
import char from "./components/char";
export default {
  name: "App",
  components: { char },
  computed: {},
  data() {
    return {
      chars,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
