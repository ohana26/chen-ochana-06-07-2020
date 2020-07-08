<template>
  <div id="app">
    <SideBar>
      <router-view></router-view>
    </SideBar>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    SideBar
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style>
</style>
