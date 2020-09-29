<template>
  <div class="container">
    <user-card v-if="!loading" :user="user" />
    <loading v-else />
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';

export default {
  name: 'User',
  data() {
    return {
      user: null,
      loading: true,
    };
  },
  components: {
    UserCard,
  },
  methods: {
    getUser() {
      this.$axios.get(`users/${this.$route.params.user}`).then((response) => {
        this.user = response.data;
      }).catch((e) => {
        console.error(e.response.data.message);
      }).finally(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
