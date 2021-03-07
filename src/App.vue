<template>
  <div>
    <div class="score">
      <div>{{ right }}</div>
      <div>{{ wrong }}</div>
    </div>
    <char
      v-if="chars.length && !gameover"
      @setanswer="setanswer"
      :key="curQ.name"
      :char="curQ"
      :chars="chars"
    />
  </div>
</template>

<script>
import charsImp from "./charsb";

import char from "./components/char";
export default {
  name: "App",
  components: { char },
  data() {
    return {
      chars: [],
      question: 0,
      right: 0,
      wrong: 0,
    };
  },
  mounted() {
    this.chars = this.shuffle(charsImp);
  },
  methods: {
    setanswer(a) {
      if (a == this.chars[this.question].name) this.right++;
      else this.wrong++;
      this.question++;
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  },
  computed: {
    gameover() {
      return this.question == this.chars.length;
    },
    curQ() {
      return this.chars[this.question];
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import "../node_modules/nes.css/css/nes.css";
html,
body,
pre,
code,
kbd,
samp,
#app {
  background: rgba(209, 209, 209, 0.336);
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  font-family: "Press Start 2P", cursive;
}
body {
  touch-action: pan-y;
}
#names {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.score {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px 10px;
  align-items: flex-end;
  color: white;
:last-child{
text-align: end;}
}
</style>
