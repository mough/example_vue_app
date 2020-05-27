<template>
<body>
  <div id="app">
    <div class="container">
      <div class="row pt-2">
        <div class="col-md">
          <div v-show="step === 0">
            <StepOne />
          </div>

          <div v-show="step === 1">
            <StepTwo />
          </div>

          <div v-show="step === 2">
            <StepThree />
          </div>

          <div v-show="step === 3">
            <Story />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="step < 3">
    <StepController
      :step="step"
      :incrementStep="incrementStep"
      :decrementStep="decrementStep"
    />
  </div>
</body>
</template>

<script>
const StepController = () => import('./StepController');
const StepOne = () => import('./StepOne');
const StepTwo = () => import('./StepTwo');
const StepThree = () => import('./StepThree');
const Story = () => import('./Story');

export default {
  name: 'FormStage',
  components: {
    StepController,
    StepOne,
    StepTwo,
    StepThree,
    Story,
  },
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    incrementStep() {
      // eslint-disable-next-line no-plusplus
      this.step++;
    },
    decrementStep() {
      if (this.step > 0) {
        // eslint-disable-next-line no-plusplus
        this.step--;
      }
    },
  },
};
</script>
