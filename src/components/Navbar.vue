<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light mb-4">
    <div class="container">
      <router-link to="/" class="navbar-brand">Homepage</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/denizcdemirci/cacheable">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div class="custom-switch">
        <input v-model="cache" type="checkbox" class="custom-control-input" id="cacheSwitch">
        <label class="custom-control-label" for="cacheSwitch">Toggle cache</label>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      cache: true,
    };
  },
  watch: {
    cache(value) {
      if (value) {
        window.location.reload();
      } else {
        this.$axios.defaults.adapter = null;
      }
    },
  },
};
</script>
