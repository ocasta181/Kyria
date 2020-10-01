<template>
  <div class="column">
    <h3>{{this.name}}</h3>
    <Task v-for="task in tasks" :key="task.id" :name="task.name"/>
  </div>
</template>

<script>
// import { mapGetters } from "vuex"

import Task from './components/Task.vue'

export default {
  name: 'column',
  props: ['name'],
  components: {
    Task,
  },
}
</script>

<style scoped>

</style>