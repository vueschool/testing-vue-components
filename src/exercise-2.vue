<template>
  <div>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add a task" />
      <button type="submit">Add</button>
    </form>
    <h2>Tasks</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        {{ task }}
        <button @click="remove(index)">Done</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim().length === 0) return;
      this.tasks.push(this.newTask);
      this.newTask = '';
    },
    remove(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>
