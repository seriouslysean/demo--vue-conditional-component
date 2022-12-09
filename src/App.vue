<template>
  <div id="app">
    <h1>Vue: Conditional Wrapper</h1>

    <ConditionalWrapper class="conditional-wrapper">
      <h2>Not Wrapped</h2>
      <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    </ConditionalWrapper>

    <ConditionalWrapper class="conditional-wrapper" :wrap="true">
      <h2>Wrapped</h2>
      <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    </ConditionalWrapper>

    <ConditionalRenderWrapper class="conditional-wrapper">
      <h2>Not Wrapped w/ Render</h2>
      <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    </ConditionalRenderWrapper>

    <ConditionalRenderWrapper class="conditional-wrapper" :wrap="true">
      <h2>Wrapped w/ Render</h2>
      <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    </ConditionalRenderWrapper>
  </div>
</template>

<script>
import ConditionalWrapper from './components/ConditionalWrapper.vue';
import ConditionalRenderWrapper from './components/ConditionalRenderWrapper.js';

export default {
  name: 'App',
  components: {
    ConditionalWrapper,
    ConditionalRenderWrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
