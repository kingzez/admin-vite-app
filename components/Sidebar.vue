<template>
  <div class="column is-2 is-sidebar-menu is-hidden-mobile">
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/">home</router-link>
        </li>
      </ul>
      <p class="menu-label">Administration</p>
      <ul class="menu-list">
        <li>
          <a>Team Settings</a>
        </li>
        <li>
          <a>Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li>
      </ul>
      <p class="menu-label">Transactions</p>
      <ul class="menu-list">
        <li>
          <a>Payments</a>
        </li>
        <li>
          <a>Transfers</a>
        </li>
        <li>
          <a>Balance</a>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  name: 'Sidebar'
}
</script>
<style lang="scss" scoped>
.menu {
  a {

    &.router-link-exact-active {
      // color: #;
    }
  }
}
</style>
