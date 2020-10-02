<template>
  <div class="column">
    <h3>{{this.name}}</h3>
    <Task v-for="task in tasks" :key="task.id" :name="task.name"/>
  </div>
</template>

<script>
  import { mapActions } from "vuex"
  import Task from "@/components/Task.vue"

  //v-if="this.order == task.status"
  export default {
    name: 'task',
    props: ['name', 'order'],
    components: {
        Task,
      },
      methods: {
        ...mapActions("tasks", ["fetchTasks", "addTask", "updateTask", "deleteTask"])
      },
      computed: {
        tasks: function() { return this.$store.getters.getTasksInStatus(this.order)}
      }
  }
</script>

<style scoped>

</style>