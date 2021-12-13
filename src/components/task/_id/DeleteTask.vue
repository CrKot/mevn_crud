<template>
  <section>
    <h2>Delete task id {{ this.$route.params.task._id }}</h2>
    <p>The action cannot be undone.</p>
    <router-link to="/" class="btn btn-success btn-lg">Cancel</router-link>
    <button @click="deleteTask" class="btn btn-danger btn-lg">Delete</button>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    deleteTask() {
      const { _id: id } = this.$route.params.task;
      axios.delete(`http://127.0.0.1:8000/${id}`)
        .then(() => {
          this.$router.push('/');
        })
        .catch(err => console.log(err));
    },
  },
};
</script>
