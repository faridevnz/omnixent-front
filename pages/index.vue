<template>
  <SearchBox @searchStarted="getReport"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    getReport (query: string, selectedLanguage: string, selectedCountry: string) {
      this.$omnixentClient.search(query, 'google', selectedLanguage, selectedCountry).then(({ data }) => {
        console.log(data.result.uuid)
        this.$router.push({ name: 'reports-id', params: { id: data.result.uuid } })
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  /* local styles */
</style>
