<template>
  <div class="title">
    <h1>Ninja Reaction Timer</h1>
    <img src="../assets/shuriken.png" alt="ninja-star" />
  </div>
  <div class="name">
    <h2>Welcome {{ name }}</h2>
  </div>
  <div class="rules">
    <p>Rules:</p>
    <p>Click the button and wait for the block and click the block.</p>
  </div>
  <button @click="start" :disabled="isPlaying" class="play-btn">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="showScore" :score="score" />
  <div v-if="!isPlaying && showScore">
    <h2>HighScores</h2>
    <div class="highScores">
      <div v-for="score in scoreBoard" :key="score" class="localScore">
        <span class="name">{{ score.user }} - {{ score.time + "ms" }}</span>
      </div>
    </div>
  </div>
  <div v-if="!isPlaying" class="logout">
    <button @click="logout" class="logout-btn">Logout</button>
  </div>
</template>

<script>
import Block from "../components/Block.vue";
import Results from "../components/Results.vue";
import firebase from "firebase/app";
import { router } from "vue-router";
export default {
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showScore: false,
      name: "",
      scoreBoard: [],
      beforeFirstGame: false,
    };
  },
  mounted() {
    const user = firebase.auth().currentUser.displayName;
    this.name = user;
    let docRef = firebase.firestore().collection("highscore");
    docRef.orderBy("time", "asc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().time <= 350) {
          this.scoreBoard.push(doc.data());
        }
      });
    });
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showScore = false;
      this.scoreBoard = [];
      this.beforeFirstGame = true;
    },
    async endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showScore = true;
      let newScore = {
        user: this.name,
        time: this.score,
      };
      const newDoc = firebase.firestore().collection("highscore");
      await newDoc.add(newScore);
    },
    async logout() {
      const fireLogout = firebase.auth().signOut();
      try {
        await fireLogout;
        this.$router.push({ name: "Welcome" });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style>
h1,
h2 {
  color: #e0e0e0;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rules {
  font-size: 1.4em;
  color: #e0e0e0;
}
.highScores {
  display: inline-block;
  background: #313131;
  width: 400px;
  height: 200px;
  border: 3px solid #d3d3d3;
  border-radius: 15px;
  overflow: hidden;
}
.name {
  font-size: 1em;
}
.localScore {
  margin-top: 2px;
}
.logout {
  margin-top: 40px;
}
.logout-btn {
  background: #e92626;
  width: 150px;
  height: 50px;
  font-size: 1.4em;
}
.play-btn {
  width: 100px;
  height: 50px;
  font-size: 1.1em;
}
</style>
