<template>
  <div>
    <form id="gerundPref">
      <div class="py-4 text-center">
        <h3>What really is a yoyo?</h3>
      </div>

      <label for="gerundOption1" class="btn btn-info mr-1">
        C2C-07: Replace this text with a gerund (any verb + 'ing').
        <input
          type="radio"
          id="gerundOption1"
          name="gerundOption1"
          value="C2C-07: Replace this text with the gerund you put in the label."
          v-model="registration.gerund"
        />
      </label>

      <label for="gerundOption2" class="btn btn-info">
        C2C-08: Replace this text with a gerund (any verb + 'ing').
        <input
          type="radio"
          id="gerundOption2"
          name="gerundOption2"
          value="C2C-08: Replace this text with the gerund you put in the label."
          v-model="registration.gerund"
        />
      </label>

      <label for="gerundOption3" class="btn btn-info mr-1">
        C2C-09: Replace this text with a gerund (any verb + 'ing').
        <input
          type="radio"
          id="gerundOption3"
          name="gerundOption3"
          value="C2C-09: Replace this text with the gerund you put in the label."
          v-model="registration.gerund"
        />
      </label>

      <label for="gerundOption4" class="btn btn-info">
        C2C-10: Replace this text with a gerund (any verb + 'ing').
        <input
          type="radio"
          id="gerundOption4"
          name="gerundOption4"
          value="C2C-10: Replace this text with the gerund you put in the label."
          v-model="registration.gerund"
        />
      </label>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StepTwo',
  computed: mapState({
    registration: (state) => state,
  }),
};
</script>
