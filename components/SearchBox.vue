<template>
  <div>
    <input v-model="query"/>
    <button @click="startSearch()">Search questions</button>
    <select v-model="selectedLanguage">
      <option v-for="languageOption in languageOptions" :value="languageOption.value" :key="languageOption.value">
        {{ languageOption.text }}
      </option>
    </select>
    <select v-model="selectedCountry">
      <option v-for="countryOption in countryOptions" :value="countryOption.value" :key="countryOption.value">
        {{ countryOption.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      query: '',
      selectedLanguage: 'en',
      selectedCountry: 'uk',
      languageOptions: [
        {
          value: 'en',
          text: 'English'
        },
        {
          value: 'it',
          text: 'Italian'
        }
      ],
      countryOptions: [
        {
          value: 'uk',
          text: 'UK'
        },
        {
          value: 'it',
          text: 'Italy'
        },
      ]
    }
  },
  methods: {
    startSearch()  {
      this.$emit('searchStarted', this.query, this.selectedLanguage, this.selectedCountry)
    }
  }

})
</script>
