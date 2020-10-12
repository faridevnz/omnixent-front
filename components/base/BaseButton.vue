<template>
  <button :style="dimension" :class="color" @click="buttonClicked">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: [Number, String],
      required: true
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    color: {
      type: String,
      default: 'secondary'
    }
  },
  data () {
    return {
      // Style data
      dimension: {
        width: `${this.width}vw`,
        height: `${this.height}px`
      }
    }
  },
  methods: {
    buttonClicked (): void {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  background-color: $primary;
  cursor: pointer;
  transition: all 100ms ease-in;
}
.secondary {
  background-color: $secondary;
  color: $background-dark;
}
.background {
  background-color: $background;
  color: white;
}
</style>
