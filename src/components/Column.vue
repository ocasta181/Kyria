<template>
  <div class="column">
    <h3>name: {{this.name}}</h3>
    <!-- <Task v-for="task in tasks" :key="task.id"/> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex"

// import Task from './components/Task.vue'

export default {
  name: 'column',
  props: ['name'],
  components: {
    // Task,
  },
}
</script>

<style scoped>

</style>