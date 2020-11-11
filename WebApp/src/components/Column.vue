<template>
  <div class="column">
    <div class="column-header">
      <span class="column-title">{{this.name}}</span>
      <button class="task-add">+</button>
    </div>
    <Task v-for="task in tasks" :key="task.id" :title="task.title" :isComplete="task.isComplete" :status="task.status"/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex"
  import Task from "@/components/Task.vue"

  //v-if="this.order == task.status"
  export default {
    name: 'task',
    props: ['name', 'order'],
    components: {
        Task,
    },
    methods: {
      ...mapActions("tasks", ["fetchTasks", "addTask", "updateTask", "deleteTask"]),

      // onclick="addTask"
      // addTask() {
      //   const test = 5 + 2;
      // }
    },
    computed: {
      ...mapGetters("tasks", ["getTasksInStatus", "getTasks"]),

      tasks() {
        return this.getTasksInStatus(this.order);
      }
    },
    created() {
      if (!this.tasks || !this.tasks.length) {
        this.$loader.start();
        this.fetchTasks().finally(() => {
          this.$loader.stop();
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .column {
    width: 15%;
  }
  .column-header {
    display: flex;
    justify-content: space-between;
    background-color: gray;

    .column-title {
      font-weight: bold;
    }
  }

</style>