<template lang="pug">
app-header

div.error(v-if="error") {{ error }}

router-view(v-slot="{ Component }" v-if="!error")
  transition(name="slide" mode="out-in")
    component(:is="Component")

app-footer
</template>

<script>
import { mapState } from 'vuex';

import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
  computed: {
    ...mapState(['error']),
  },
};
</script>
