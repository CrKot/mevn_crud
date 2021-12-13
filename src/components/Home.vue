<template>
  <div>
    <div class="text-start">
      <router-link to="/AddTask" class="btn btn-success btn-lg"
        >Add task</router-link
      >
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>
            <router-link :to="{ name: 'task-id-edit', params: { task } }">{{
              task._id
            }}</router-link>
          </td>
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td class="d-flex">
            <router-link
              class="btn btn-outline-warning btn-lg"
              :to="{ name: 'task-id-edit', params: { task }}"
              >Edit</router-link
            >
            <router-link
              class="btn btn-outline-danger btn-lg"
              :to="{ name: 'task-id-delete', params: { task }}"
              >Delete</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button @click="deleteAll" class="btn btn-danger btn-lg">
        Delete all tasks
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    getTasks() {
      axios.get('http://127.0.0.1:8000')
        .then(({ data }) => {
          this.tasks = data;
        })
        .catch(err => console.error(err));
    },
    deleteAll() {
      axios.delete('http://127.0.0.1:8000/delete/all')
        .then(() => {
          this.tasks = [];
        })
        .catch(err => console.log(err));
    },
  },
  beforeMount() {
    this.getTasks();
  },
};
</script>

<style scoped>
.btn {
  margin: 1%;
}
</style>
