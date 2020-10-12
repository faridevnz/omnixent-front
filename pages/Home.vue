<template>
  <BaseInputWithButton width="50" height="100" @submit="startSearch">
    <BaseIcon width="41" height="21" view-box="0 0 41 21">
      <RightArrow />
    </BaseIcon>
  </BaseInputWithButton>
</template>

<script lang="ts">
import RightArrow from '@/assets/icons/RightArrow.vue'

export default {
  components: { RightArrow },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    startSearch (query: string): void {
      // search method
      this.query = query
    }
  }
}
</script>

<style>

</style>
