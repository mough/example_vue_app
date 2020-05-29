<template>
  <div>
    <form id="nounsPref">
      <div class="py-4 text-center">
        <h3>C2C-11: Replace this text with a question.</h3>
      </div>

      <label for="nounsOption1" class="btn btn-info mr-1">
        Potatoes
        <input
          type="radio"
          id="nounsOption1"
          name="nounsOption1"
          value="Potatoes"
          v-model="registration.nouns"
        />
      </label>

      <label for="nounsOption2" class="btn btn-info">
        C2C-13: Replace this text with a plural noun (person, place or thing).
        <input
          type="radio"
          id="nounsOption2"
          name="nounsOption2"
          value="C2C-13: Replace this text with the plural noun you put in the label."
          v-model="registration.nouns"
        />
      </label>

      <label for="nounsOption3" class="btn btn-info mr-1">
        C2C-14: Replace this text with a plural noun (person, place or thing).
        <input
          type="radio"
          id="nounsOption3"
          name="nounsOption3"
          value="C2C-14: Replace this text with the plural noun you put in the label."
          v-model="registration.nouns"
        />
      </label>

      <label for="nounsOption4" class="btn btn-info">
        C2C-15: Replace this text with a plural noun (person, place or thing).
        <input
          type="radio"
          id="nounsOption4"
          name="nounsOption4"
          value="C2C-15: Replace this text with the plural noun you put in the label."
          v-model="registration.nouns"
        />
      </label>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StepThree',
  computed: mapState({
    registration: (state) => state,
  }),
};
</script>
