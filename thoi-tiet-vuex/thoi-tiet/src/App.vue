<template>
  <div id="app">
    <div :class="$style.container">
      <router-view/>
    </div>
    <sidebar/>
    <sidebar-toggle/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/SideBar.vue'
import SidebarToggle from './components/SidebarToggle.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    SidebarToggle
  }
}
</script>

<style>
:root {
  --accent-color: #ffc107;
  --primary-color: #673ab7;
  --dark-color: #2e294e;
}

* {
  box-sizing: border-box;
}
</style>
<style module>
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--primary-color);
}
</style>