<template>
  <div class="input-container" :style="dimensions">
    <input v-model="value" type="text" placeholder="placeholder">
    <button @click="submit">
      <slot />
    </button>
  </div>
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
      required: true
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    }
  },
  data () {
    return {
      dimensions: {
        width: `${this.width}vw`,
        height: `${this.height}px`
      },
      value: ''
    }
  },
  methods: {
    submit (): void {
      this.$emit('submit', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;

  input {
    width: 100%;
    height: 100%;
    border: 4px solid $primary;
    border-radius: 20px;
    background-color: $background;
    font-size: 40px;
    padding: 0 0 0 4%;
    color: #FFFFFF;
    z-index: 2;
    &::placeholder {
      color: #FFFFFF50;
    }
    &:focus-within {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 13%;
    border-radius: 0 20px 20px 0;
    border: none;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms linear;
    z-index: 1;
    &:hover {
      background-color: $primary-dark;
    }
  }

}
</style>
