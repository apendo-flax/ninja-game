<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      email: this.email,
      password: this.password,
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        if (!res) {
          console.log("did not work", res);
        }
      } catch (err) {
        console.log(err.message);
        this.error = err.message;
      }
      console.log("SUCCESS!", this.res);
      this.$router.push({ name: "Game" });
    },
  },
};
</script>

<style></style>
