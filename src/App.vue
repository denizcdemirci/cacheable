<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light mb-4">
      <div class="container">
        <router-link to="/" class="navbar-brand">Homepage</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
