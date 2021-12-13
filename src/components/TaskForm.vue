<template>
  <form class="text-start">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="task.name" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="description">Description</label>
      <textarea
        class="form-control"
        placeholder="leave a description here"
        id="description"
        v-model="task.description"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  props: ['theTask'],
  data() {
    return {
      task: this.theTask,
    };
  },
};
</script>
