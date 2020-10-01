<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    this.$omnixentClient.getReport(this.$route.params.id).then((data) => {
      console.log(data)
    })
  }
})
</script>

<style lang="scss" scoped>
  /* local styles */
</style>
