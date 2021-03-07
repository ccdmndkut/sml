<template>
  <div id="charCont">
    <div id="imgCont">
      <img :src="char.url" />
    </div>

    <div id="nameCont">
      <div @click="setAnswer" v-for="name in names" :key="name">
        <button type="button" :class="`nes-btn is-${randBtn()}`">
          {{ name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["char", "chars"],
  data() {
    return {
      btns: ["primary", "success", "warning"],
    };
  },
  methods: {
    randBtn() {
      return this.btns[Math.floor(Math.random() * 2)];
    },
    setAnswer(ev) {
      this.$emit("setanswer", ev.target.innerText);
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  },
  computed: {
    corAnswer() {
      return this.char.name;
    },
    allNames() {
      return this.chars.map((char) => char.name);
    },
    names() {
      let sample = this.shuffle(this.allNames.slice(0, 8)).filter(
        (n) => n != this.corAnswer
      );
      let choices = [this.char.name, ...this.shuffle(sample)];
      let shuffled = this.shuffle(choices);
      return shuffled;
    },
  },
};
</script>

<style lang="scss" scoped>
#charCont {
  display: grid;
  justify-items: center;
  grid-auto-rows: 1fr auto;
}
#imgCont {
  cursor: default;
  padding: 20px;
  width: 100vw;
}
img {
  height: 300px;
}
#nameCont {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  background: rgba(209, 209, 209, 0.336);
  padding: 30px;
  justify-items: center;
}
#charCont {
  text-align: center;
}
img {
  margin-bottom: 20px;
}
.answer {
  font-weight: bold;
}
.nes-btn {
  overflow: hidden;
  width: 45vw;
  max-width: 300px;
}
</style>