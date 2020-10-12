<template>
  <div>
    <BaseInputWithButton width="50" height="100" @submit="startSearch">
      <BaseIcon width="41" height="21" view-box="0 0 41 21">
        <RightArrow />
      </BaseIcon>
    </BaseInputWithButton>
    <br>
    <BaseTabSelector width="21" :tab-items="availableServices" @tabChange="changeService" />
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
      query: ''
    }
  },
  methods: {
    startSearch (query: string): void {
      // search method
      this.query = query
    },
    changeService (newServiceIndex: number): void {
      this.selectedService = this.availableServices[newServiceIndex]
    }
  }
}
</script>

<style>

</style>
