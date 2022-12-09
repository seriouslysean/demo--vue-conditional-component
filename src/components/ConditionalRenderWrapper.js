import { h } from 'vue';

export default {
  name: 'ConditionalRenderWrapper',
  props: {
    wrap: Boolean,
    default: false,
  },
  // Vue 3 Render Functions, https://vuejs.org/api/render-function.html#h
  // For Vue 2, see https://v2.vuejs.org/v2/guide/render-function.html#ad
  render() {
    if (!this.wrap) {
      return h(this.$slots.default);
    }
    return h(
      'div',
      {
        ...this.$attrs,
      },
      [h(this.$slots.default)]
    );
  },
};
