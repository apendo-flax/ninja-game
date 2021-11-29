<template>
  <form @submit.prevent="handleSubmit">
    <h2>Sign up</h2>
    <p>And become a ninja!</p>
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ this.error }}</div>
    <button @click="signup(this.email, this.password, this.displayName)">
      Sign up
    </button>
  </form>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      error: "",
    };
  },
  methods: {
    async signup(email, password, displayName) {
      this.error = null;

      try {
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (!res) {
          this.error = "Something went wrong!";
        }
        await res.user.updateProfile({ displayName });
        this.error = null;
        this.$router.push({ name: "Game" });
        // return res;
      } catch (err) {
        console.log(err.message);
        this.error = err.message;
      }
    },
  },
};
</script>

<style></style>
