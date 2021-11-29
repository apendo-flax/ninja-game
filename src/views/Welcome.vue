<template>
  <div class="welcome container">
    <div class="Welcome-title">
      <h2>Welcome to Ninja Game</h2>
      <img src="../assets/shuriken.png" alt="throwing-star" />
    </div>
    <img src="../assets/ninja.png" alt="ninja" />
    <p>Are you fast as a ninja?</p>
    <div>
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="toggleModal">Signup</span> instead!</p>
    </div>
    <div v-if="showModal" class="modalDiv">
      <Modal @close="toggleModal">
        <SignupForm />
      </Modal>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import Modal from "../components/Modal.vue";
import SignupForm from "../components/SignupForm.vue";
export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: { LoginForm, Modal, SignupForm },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
.Welcome-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcome h2,
.welcome p {
  color: black;
}
.modalDiv {
  display: flex;
  align-items: center;
  justify-items: center;
}
</style>
