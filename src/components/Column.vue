<template>
  <div class="column">
    <Task v-for="task in tasks" :key="task.id"/>
  </div>
</template>

<script>
import Task from './components/Task.vue'

export default {
  name: 'column',
  components: {
    Task,

  }
}
</script>

<style scoped>

</style>