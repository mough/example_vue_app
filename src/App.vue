<template>
<div>
  <div id="app"></div>
  <div class="pt-3 row">
    <div class="col-md-6 offset-md-3">
        <img
          src="./assets/owl.png"
          width="100px"
          height="100px"
          style="display:block;margin:auto"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h2>Wise Words Generator</h2>
        <p>Let's create some wisdom!</p>
        <p id="errorMessage" class="text-danger" style="display:none;"></p>
      </div>
    </div>
    <FormStage />
  </div>
</template>

<script>
import FormStage from './components/FormStage.vue';

export default {
  name: 'app',
  components: {
    FormStage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
