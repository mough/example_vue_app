<template>
  <div>
      <div class="py-4 text-center">
        <h3 id="story1">A single {{ this.registration.noun }}
           is the key to not {{ this.registration.gerund }}
            your own {{ this.registration.nouns }}.</h3>

        <h3 id="story2">Always bring a {{ this.registration.noun }}
           while {{ this.registration.gerund }}
            near {{ this.registration.nouns }}.</h3>

        <h3 id="story3"> {{ this.registration.noun }}
           is the root of all evil, but {{ this.registration.gerund }}
            is nearly as good as {{ this.registration.nouns }}.</h3>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  showElement,
} from '../display_utils';

export default {
  name: 'Story',
  computed: mapState({
    registration: (state) => state,
  }),
  mounted() {
    const chosen = this.randomNumber(1, 3);
    // eslint-disable-next-line no-console
    console.log(`chosen: ${chosen}`);
    showElement(`story${chosen}`);
  },
  methods: {
    randomNumber(min, max) {
      const minimum = Math.ceil(min);
      const maximum = Math.floor(max);
      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    },
  },
};
</script>

<style scoped>
#story1, #story2, #story3 {
  display: none
}
</style>
