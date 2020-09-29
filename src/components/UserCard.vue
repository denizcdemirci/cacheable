<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-3">
        <img :src="user.avatar_url" class="card-img" :alt="user.name">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }} ({{ user.login }})</h5>
          <p class="card-text">{{ user.bio }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {{ user.followers }} followers - {{ user.following }} following
          </li>
          <li class="list-group-item">Company: {{ user.company }}</li>
          <li class="list-group-item">Location: {{ user.location }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
