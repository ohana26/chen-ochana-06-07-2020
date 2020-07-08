<template>
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-default navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid collapse navbar-collapse">
          <div class="navbar-nav">
            <span class="nav-item nav-link" v-for="(tab, index) in tabs" :key="index" :class="{ 'active': tab.isActive }" @click="selectTab(tab)">{{ tab.name }}</span>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <ItemList name="Item List" :selected="true" :isReceived="true"></ItemList>
        <Stores name="Stores" :selected="false"></Stores>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from '../components/ItemList';
import Stores from '../components/Stores'

export default {
  name: 'ReceivedListPage',
  components: {
    ItemList,
    Stores
  },
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    }
  },
}
</script>

<style>
</style>
