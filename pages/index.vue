<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ $t('title') }}
      </h1>
      <h2 class="subtitle">{{ $t('wipMessage') }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  background: #0F0D53;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #62D6F0;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-transform: uppercase;
}

.links {
  padding-top: 15px;
}
</style>
