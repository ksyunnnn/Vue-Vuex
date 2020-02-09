<template>
  <div>
    <p style="margin: 2rem;">{{message}}</p>
    <ul>
      <li v-for="(message,i) in history" :key="i">msg: {{message}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    message() {
      return this.$store.state.message.write.message;
    },
    history() {
      return this.$store.state.message.history;
    }
  }
};
</script>

