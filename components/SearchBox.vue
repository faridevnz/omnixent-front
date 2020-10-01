<template>
  <div>
    <input v-model="query"/>
    <button :disabled="query == ''" @click="startSearch()">{{$t('search')}}</button>
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
import { TranslateResult } from 'vue-i18n'

export default Vue.extend({
  data () {
    return {
      query: '',
      selectedLanguage: 'en',
      selectedCountry: 'uk',
      languageOptions: [
        {
          value: 'en',
          text: this.$t('English') as TranslateResult
        },
        {
          value: 'it',
          text: this.$t('Italian') as TranslateResult
        }
      ],
      countryOptions: [
        {
          value: 'uk',
          text: this.$t('UK') as TranslateResult
        },
        {
          value: 'it',
          text: this.$t('Italy') as TranslateResult
        }
      ]
    }
  },
  methods: {
    startSearch () {
      this.$emit('searchStarted', this.query, this.selectedLanguage, this.selectedCountry)
    }
  }

})
</script>
