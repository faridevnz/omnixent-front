<template>
  <div>
    <BaseInputWithButton width="50" height="100" @submit="startSearch">
      <BaseIcon width="41" height="21" view-box="0 0 41 21">
        <RightArrow />
      </BaseIcon>
    </BaseInputWithButton>
    <br>
    <BaseTabSelector width="30" :tab-items="availableServices" @tabChange="changeService" />
    <br>
    <div class="selectors">
      <BaseListSelector width="10" height="50" :options-list="supportedLangs" @optionChange="changeLang" />
      <BaseListSelector width="20" height="50" :options-list="supportedCountries" @optionChange="changeCountry" />
    </div>
  </div>
</template>

<script lang="ts">
import RightArrow from '@/assets/icons/RightArrow.vue'

export default {
  components: { RightArrow },
  data () {
    return {
      availableServices: ['Google', 'YouTube', 'Amazon'],
      selectedService: 'Google',
      supportedLangs: ['italiano', 'english', 'spanish'],
      selectedLang: 'italiano',
      supportedCountries: ['🇮🇹 Italia', '🇳🇱 Paesi Bassi', '🇨🇺 Cuba', '🇩🇪 Germania', '🇫🇷 Francia'],
      selectedCountry: 'italia',
      query: ''
    }
  },
  methods: {
    startSearch (query: string): void {
      // search method
      this.query = query
    },
    changeService (newService: string): void {
      this.selectedService = newService
    },
    changeLang (newLang: string): void {
      this.selectedLang = newLang
    },
    changeCountry (newCountry: string): void {
      // eliminiamo la bandiera dal nome del paele
      this.selectedCountry = newCountry.split(' ')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.selectors {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
