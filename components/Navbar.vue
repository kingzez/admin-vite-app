<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <figure class="image is-32x32">
              <img class="is-rounded avatar" src="../assets/img/wave-dark.png" />
            </figure>
            <span class="username">{{ username }}</span>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Profile</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Navbar',
  setup() {
    const store = useStore()
    const username = computed(() => store.getters.username)

    return { username }
  },
}
</script>
<style lang="scss">
.navbar {
  .avatar {
    max-height: 32px;
    height: 32px;
    width: 32px;
  }
  .username {
    margin-left: 10px;
  }
}
</style>
