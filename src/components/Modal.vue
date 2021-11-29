<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 600px;
  padding: 20px;
  margin: 100px auto;
  background: #c9c9c9;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  min-width: 100%;
  min-height: 100%;
}
.modal h1 {
  color: rgb(202, 67, 173);
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actons a {
  color: #4d8f4b;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
