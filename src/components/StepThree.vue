<template>
  <div>
    <form id="noun2Pref">
      <div class="py-4 text-center">
        <h3>C2C-11: Replace this text with a question.</h3>
      </div>

      <label for="noun2Option1" class="btn btn-info mr-1">
        C2C-12: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="noun2Option1"
          name="noun2Option1"
          value="C2C-12: Replace this text with a singular noun (person, place or thing)"
          v-model="registration.noun2"
        />
      </label>

      <label for="noun2Option2" class="btn btn-info">
        C2C-13: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="noun2Option2"
          name="noun2Option2"
          value="C2C-13: Replace this text with a singular noun (person, place or thing)"
          v-model="registration.noun2"
        />
      </label>

      <label for="noun2Option3" class="btn btn-info mr-1">
        C2C-14: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="noun2Option3"
          name="noun2Option3"
          value="C2C-14: Replace this text with a singular noun (person, place or thing)"
          v-model="registration.noun2"
        />
      </label>

      <label for="noun2Option4" class="btn btn-info">
        C2C-15: Replace this text with a singular noun (person, place or thing).
        <input
          type="radio"
          id="noun2Option4"
          name="noun2Option4"
          value="C2C-15: Replace this text with a singular noun (person, place or thing)"
          v-model="registration.noun2"
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
