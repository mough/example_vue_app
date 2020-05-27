<template>
  <div>
    <div class="step-controller row mx-1 my-1 pt-4">
      <div class="col">
        <button
          class="btn btn-primary btn-lg mx-1 my-1 float-right"
          v-show="step > 0"
          id="prevButton"
          @click.prevent="handleDecrementStep"
        >Go Back</button>

      </div>
      <div class="col">
        <button
          class="btn btn-success btn-lg mx-1 my-1"
          type="submit"
          id="nextButton"
          @click.stop.prevent="handleIncrementStep"
        >Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  enableNextButton,
  disableNextButton,
  setShowErrorMessage,
  hideErrorMessage,
} from '../display_utils';

export default {
  name: 'StepController',
  props: {
    step: Number,
    incrementStep: Function,
    decrementStep: Function,
    postToServer: Function,
  },
  computed: mapState({
    registration: (state) => state,
  }),
  methods: {
    handleIncrementStep() {
      hideErrorMessage();
      disableNextButton();
      hideErrorMessage();
      return this.verifyStepRequiredData().then((result) => {
        enableNextButton();
        if (result.goodToGo) {
          hideErrorMessage();
          this.incrementStep();
        }
        // else we expect other step specific error messages to
        // already be displayed so we will just wait
      });
    },
    verifyStepRequiredData() {
      // eslint-disable-next-line consistent-return
      return new Promise((resolve, reject) => {
        switch (this.step) {
          case 0:
            if (this.registration.noun !== '') {
              resolve({
                goodToGo: true,
              });
            } else {
              setShowErrorMessage('Please choose an option.');
            }
            break;
          case 1:
            if (this.registration.gerund !== '') {
              resolve({
                goodToGo: true,
              });
            } else {
              setShowErrorMessage('Please choose an option.');
            }
            break;
          case 2:
            if (this.registration.nouns !== '') {
              resolve({
                goodToGo: true,
              });
            } else {
              setShowErrorMessage('Please choose an option.');
            }
            break;
          default:
            reject();
        }
        resolve({
          goodToGo: false,
        });
      });
    },
    handleDecrementStep() {
      this.decrementStep();
    },
  },
};
</script>

<style scoped></style>
