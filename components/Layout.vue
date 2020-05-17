<template>
  <div>
    <Navbar />
    <div class="columns is-fullheight">
      <Sidebar />
      <div class="column is-main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
  }
}
</script>
