<template>
  <div class="container" v-show="isActive">
    <h1>Items</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Online Store</th>
          <th>Price</th>
          <th>Delivery EST Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.store}}</td>
          <td>{{item.price}}</td>
          <td>{{item.date}}</td>
          <td v-if="!isReceived"><button @click='received(item)' class='btn btn-primary'>Received</button></td>
          <td v-if="isReceived"><button @click='remove(item)' class='btn btn-primary'>Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: {required: true},
    selected: {default: false},
    isReceived: {default: false}
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
    items() {
      let storeItems = this.$store.getters.getItemToItemList;
      if (this.isReceived) {
        storeItems = this.$store.getters.getReceivedItems;
      }
      return this.sortedByDateItems(storeItems);
    },
  },
  methods: {
    received(item) {
      this.$store.commit("received", item);
    },
    remove(item) {
      this.$store.commit("remove", item);
    },
    sortedByDateItems(items) {
      let itemsToSort = items;
      let sortedItems = itemsToSort.sort((a, b) => {
        let aDate = new Date(a.date).getTime();
        let bDate = new Date(b.date).getTime();
        return (aDate >= bDate) ? 1 : -1;
      })
      return sortedItems;
    },
  },
}
</script>

<style>
</style>
