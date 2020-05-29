<template>
  <div>
    <form id="noun1Pref">
      <div class="py-4 text-center">
        <h3>C2C-01: Replace this text with a question.</h3>
      </div>

      <label for="nounOption1" class="btn btn-info mr-1">
        C2C-02: Jay.
        <input
          type="radio"
          id="nounOption1"
          name="nounOption1"
          value="C2C-02: Jay"
          v-model="registration.noun"
        />
      </label>
      <label for="nounOption2" class="btn btn-info">
        C2C-03: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="nounOption2"
          name="nounOption2"
          value="C2C-03: Replace this text with the singular noun you put in the label."
          v-model="registration.noun"
        />
      </label>

      <label for="nounOption3" class="btn btn-info mr-1">
        C2C-04: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="nounOption3"
          name="nounOption3"
          value="C2C-04: Replace this text with the singular noun you put in the label."
          v-model="registration.noun"
        />
      </label>

      <label for="nounOption4" class="btn btn-info">
        C2C-05: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="nounOption4"
          name="nounOption4"
          value="C2C-05: Replace this text with the singular noun you put in the label."
          v-model="registration.noun"
        />
      </label>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StepOne',
  computed: mapState({
    registration: (state) => state,
  }),
};
</script>
