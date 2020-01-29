<template>
  <div id="Tasks">
    <Column v-for="column in columns" :key="column.id"/>
  </div>
</template>

<script>
import Column from './components/Column.vue'

export default {
  name: 'tasks',
  components: {
    Column,

  }
}
</script>

<style scoped>

</style>