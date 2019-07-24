<template>
  <img
    class="logo"
    :src="require(`./assets/readr-logo-${theme}.svg`)"
    alt="READr logo make some change"
  />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: value => ['light', 'dark'].includes(value)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
