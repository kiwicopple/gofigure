<template>
<div class="MainContent">
  <router-view></router-view>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data: () => ({
  }),
  computed: {
    ...mapGetters([])
  },
  methods: {
  }
}
</script>

<style lang="scss">
body, html, .MainContent {
  background: #f4f4f4;
}
* {
  font-size: 0.9rem;
}
</style>
