<template>
  <h2>Your reaction time: {{ score }} ms</h2>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Faster than lightning! You are worthy";
    } else if (this.score < 450) {
      this.rank = "Pretty fast but not fast enough";
    } else {
      this.rank = "Go back to training, snails are faster!";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
