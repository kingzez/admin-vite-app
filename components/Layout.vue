<template>
  <!-- 根节点放置一个空 div vite build 会报错 -->
  <Navbar />
  <div class="columns is-fullheight">
    <Sidebar />
    <div class="column is-main-content">
      <img src="../assets/img/logo.png" alt srcset />
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'Layout',
  components: {
    HelloWorld,
    Navbar,
    Sidebar,
  }
}
</script>
