<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save or Load your Date</h6>
    <h6>Click on 'End Day' to start a New Day!</h6>
    <hr>
    <p>Your Funds is: {{ funds | currency }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      funds() {
        return this.$store.getters.funds
      },
    },
  }
</script>

<style scoped>

</style>
