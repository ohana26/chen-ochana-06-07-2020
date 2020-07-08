<template>
  <div class="row">
    <div class="col-12">
      <transition name="slide">
        <div class="sidebar">
          <ul>
            <li>
              <router-link to="/list">
                Bought Items Page
              </router-link>
            </li>
            <li>
              <router-link to="/received">
                Received List Page
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {

  },
  computed: {

  }
}
</script>
<style>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar li:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>