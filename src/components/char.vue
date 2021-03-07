<template>
  <div @dblclick.prevent="() => {}" id="charCont">
    <div id="imgCont">
      <img :src="char.url" />
    </div>

    <div id="nameCont">
      <template v-if="!answer">
      <div @click="setAnswer" v-for="name in names" :key="name">
        <button type="button" :class="`nes-btn is-${randBtn()}`">
          {{ name }}
        </button>
      </div>
      </template>
      <div v-if="answer">      
              <button @click="$emit('next')" type="button" :class="`nes-btn is-${answer==guess ? 'success': 'error'}`">
      Next</button>  
      <div style="margin:  60px">
          <i  :class='[answer == guess ? "trophy" : "close", "nes-icon  is-large"]'></i>
          <h5>
{{answer == guess ? "Correct" : "Wrong"}}

          </h5>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["char", "chars", "answer"],
  data() {
    return {
      guess:null,
      btns: ["primary", "success", "warning"],
    };
  },
  methods: {
    randBtn() {
      return this.btns[Math.floor(Math.random() * 1)];
    },
    setAnswer(ev) {
      this.guess = ev.target.innerText
      this.$emit("setanswer", ev.target.innerText);
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  },
  computed: {
    allNames() {
      let allNames = this.chars
        .map((char) => char.name)
        .filter((n) => n != this.char.name);
      return this.shuffle(allNames);
    },
    names() {
      let sample = this.shuffle(this.allNames.slice(0, 4));
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
  grid-auto-rows: auto 1fr;
}
#imgCont {
  cursor: default;
  padding: 10px;
  width: 100vw;
  background: white;
}
img {
  height: 270px;
  max-width: 90vw;
}
#nameCont {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 30px 10px;
  justify-items: center;
  overflow: scroll;
}
#charCont {
  text-align: center;
}

.nes-btn {
  overflow: hidden;
  width: 95vw;
  max-width: 400px;
}
</style>