<template>
  <div v-if="wrap">
    <slot />
  </div>
  <slot v-else />
</template>

<script>
export default {
  name: 'ConditionalWrapper',
  props: {
    wrap: Boolean,
    default: false,
  },
};
</script>

<style>
/* No styles */
</style>
