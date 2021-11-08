<template lang="pug">
transition(name="fade" mode="out-in")
  figure(v-if="!loading")
    blockquote {{ quote.quoteText }}
    figcaption(v-if="quote.quoteAuthor")
      router-link(:to="{ name: 'author', params: { author: quote.quoteAuthor } }")
        div
          span {{ quote.quoteAuthor }}
          small {{ quote.quoteGenre }}
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
          path(d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z")
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Quote',
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>
