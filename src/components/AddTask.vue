<template>
  <div>
    <h3>Add a new task</h3>
    <TaskForm :theTask="task" />
    <div class="text-end">
      <router-link to="/" class="btn btn-lg btn-warning">Cancel</router-link>
      <button class="btn btn-lg btn-success" @click="addedTask">Save</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TaskForm from '@/components/TaskForm';

export default {
  components: {
    TaskForm,
  },
  data() {
    return {
      task: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    addedTask() {
      axios.post('http://127.0.0.1:8000/', this.task)
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.btn {
  max-width: 7em;
}
</style>
