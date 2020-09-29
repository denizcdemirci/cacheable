<template>
  <div class="container">
    <repo-card v-if="!loading" :repo="repo" show-detail />
    <loading v-else />
  </div>
</template>

<script>
import RepoCard from '../components/RepoCard.vue';

export default {
  name: 'Repo',
  data() {
    return {
      repo: null,
      loading: true,
    };
  },
  components: {
    RepoCard,
  },
  methods: {
    getRepository() {
      this.$axios.get(`repos/${this.$route.params.user}/${this.$route.params.repo}`).then((response) => {
        this.repo = response.data;
      }).catch((e) => {
        console.error(e.response.data.message);
      }).finally(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    this.getRepository();
  },
};
</script>
