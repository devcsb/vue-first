<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
    <button v-on:click="sendAlert(propsdata)">alert</button>
  </header>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    sendEvent: function() {
      this.$emit('renew');
    },
    sendAlert: function() {
      this.$emit('pass-alert');
    }
  }
}
</script>

<style scoped>

</style>