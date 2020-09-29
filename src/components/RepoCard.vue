<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ repo.name }}</h5>
      <p class="card-text">{{ repo.description }}</p>
      <router-link v-if="showDetail" :to="`/${repo.owner.login}`" class="btn btn-primary">
        Go owner
      </router-link>
      <router-link v-if="!showDetail" :to="repo.full_name" class="btn btn-primary">
        Go repository
      </router-link>
    </div>
    <ul v-if="showDetail" class="list-group list-group-flush">
      <li class="list-group-item">{{ repo.watchers }} watchers</li>
      <li class="list-group-item">{{ repo.stargazers_count }} stargazers</li>
      <li class="list-group-item">{{ repo.forks }} forks</li>
      <li class="list-group-item">{{ repo.open_issues }} open issues</li>
    </ul>
    <div class="card-footer text-muted">
      <span>Last update: {{ $moment(repo.updated_at).fromNow() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoCard',
  props: {
    repo: {
      type: Object,
      required: true,
    },
    showDetail: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
