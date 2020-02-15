<template>
  <div>
    <input type="text" v-model="filter" />
    <ul>
      <li v-for="user in filteredUsers" :key="user">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filter: ''
    };
  },
  computed: {
    filteredUsers() {
      console.log(this.users);
      if (this.filter.trim().length === 0) return this.users;
      return this.users.filter(user => {
        return user.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
  }
};
</script>
