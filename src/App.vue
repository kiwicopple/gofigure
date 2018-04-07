<template>
<div class="MainContent">
  <nav class="MainMenu navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        GO FIGURE
      </a>
      <!-- <div class="navbar-burger burger" data-target="main-menu">
        <span></span>
        <span></span>
        <span></span>
      </div> -->
    </div>

    <div class="navbar-menu" id="main-menu">
      <div class="navbar-start">

        <!-- <a class="navbar-item" href="#">
          Menu link
        </a> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <figure class="image is-avatar is-24x24">
              <img src="/static/img/placeholder.png">
            </figure>
          </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item">
              Profile
            </a>
            <a class="navbar-item">
              Settings
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              Logout
            </div>
          </div>
        </div>
      </div>

    </div>
  </nav>



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
.MainContent {
  background: #dedede;
}
* {
  font-size: 0.9rem;
}
</style>
