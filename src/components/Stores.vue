<template>
  <div class="container" v-show="isActive">
    <h1>Stores</h1>
    <div class="row">
      <div class="col-md-6 form-group container">
        <label for="rate">Calculate by rate:</label>
        <select v-model="myRate" class="form-control select-responsive" id="rate">
          <option disabled :value="myRate">{{myRate}}</option>
          <option v-for="(rate, type) in exchangeRate" :value="type" :key="type">{{type}}</option>
        </select>
      </div>
    </div>
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
        <tr>
          <td><b>Total:</b></td>
          <td><b>{{ storesTotalSum }} ({{myRate}})</b></td>
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
      exchangeRate: {},
      myRate: "1"
    };
  },
  mounted() {
    this.isActive = this.selected;
    this.getCurrencyDataFromServer();
  },
  computed: {
    stores() {
      return this.$store.getters.getStores;
    },
    storesTotalSum() {
      let sum = this.$store.getters.getStoresTotalSum;
      if (this.exchangeRate[this.myRate]) {
        sum = sum * parseFloat(this.exchangeRate[this.myRate])
      }
      return sum;
    }
  },
  methods: {
    getCurrencyDataFromServer() {
      let outerThis = this;
      this.axios.get("https://api.exchangeratesapi.io/latest").then((response) => {
        outerThis.exchangeRate = response.data.rates;
        outerThis.myRate = response.data.base;
      }).catch(err => {
        if (err) {
          alert("cannot get exchange rate API");
        }
      })
    }
  },
}
</script>

<style>
@media only screen and (max-width: 760px),
  (min-width: 768px) and (max-width: 1024px) {
  .select-responsive {
    width: auto;
    height: auto;
    max-height: 150px;
    max-width: 150px;
  }
}
</style>
