<template lang="pug">
main
  h1 {{ author }}
  app-quote(v-for="quote in quotes" :key="quote._id" :quote="{ quoteText: quote.quoteText }")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppQuote from '@/components/Quote.vue';

export default {
  name: 'Author',
  props: ['author'],
  components: {
    'app-quote': AppQuote,
  },
  methods: {
    ...mapActions(['getAuthorQuotes']),
  },
  computed: {
    ...mapState(['quotes']),
  },
  created() {
    this.getAuthorQuotes(this.$route.params.author);
  },
};
</script>
