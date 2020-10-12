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
    <BaseListSelector width="10" height="50" :options-list="supportedLang" @optionChange="changeLang" />
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
      supportedLang: ['italiano', 'english', 'spanish'],
      selectedLang: 'italiano',
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
    }
  }
}
</script>

<style>

</style>
