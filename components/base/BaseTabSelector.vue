<template>
  <div :style="dimension" class="tab-selector">
    <BaseButton
      v-for="(item, index) in tabItems"
      :key="index"
      width="9"
      height="60"
      :color="whichSelected === index ? 'secondary' : 'background'"
      @click="changeTab(index)"
    >
      {{ item }}
    </BaseButton>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: [Number, String],
      required: true
    },
    tabItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dimension: {
        width: `${this.width}vw`
      },
      selectedTab: 0
    }
  },
  computed: {
    whichSelected (): Number {
      return this.selectedTab
    }
  },
  methods: {
    changeTab (index: number): void {
      this.selectedTab = index
      // event emission when change the selected tab
      this.$emit('tabChange', this.tabItems[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $background-dark;
  padding: 15px;
  box-sizing: content-box;
  border-radius: 25px;
}
</style>
