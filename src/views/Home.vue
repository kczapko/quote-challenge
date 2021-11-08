<template>
  <main>
    <app-quote :quote="quote"></app-quote>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppQuote from '@/components/Quote.vue';

export default {
  name: 'Home',
  components: {
    'app-quote': AppQuote,
  },
  methods: {
    ...mapActions(['getRandomQuote']),
  },
  computed: {
    ...mapState(['quote']),
  },
  created() {
    this.getRandomQuote();
  },
};
</script>
