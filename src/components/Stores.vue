<template>
  <div class="container" v-show="isActive">
    <h1>Stores</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Store Name</th>
          <th>Sum Items from Store</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in stores" :key="index">
          <td>{{index}}</td>
          <td>{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: {required: true},
    selected: {default: false}
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.isActive = this.selected;
  },
  computed: {
    stores() {
      return this.$store.getters.getStores;
    }
  }
}
</script>

<style>
</style>
