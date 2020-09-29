<template>
  <div class="container">
    <div v-if="!loading" class="card-columns">
      <repo-card v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
    <loading v-else />
  </div>
</template>

<script>
import RepoCard from '../components/repo-card.vue';

export default {
  name: 'Home',
  components: { RepoCard },
  data() {
    return {
      repos: null,
      loading: true,
    };
  },
  comments: {
    RepoCard,
  },
  methods: {
    getRepositories() {
      this.$axios.get('search/repositories', {
        params: {
          q: 'vuejs',
          per_page: 50,
        },
      }).then((response) => {
        this.repos = response.data.items;
      }).catch((e) => {
        console.error(e.response.data.message);
      }).finally(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    this.getRepositories();
  },
};
</script>
