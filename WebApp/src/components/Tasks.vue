<template>
  <div id="Tasks">
    <Column v-for="column in getColumns" :key="column.id" :name="column.name" :order="column.order" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"
  import Column from '@/components/Column.vue'

  export default {
    name: 'tasks',
    components: {
      Column,
    },
    methods: {
      ...mapActions("columns", ["fetchColumns", "addColumn", "updateColumn", "deleteColumn"])
    },
    computed: mapGetters("columns", ["getColumns"]),
    created() {
      // this.fetchColumns();
    }
  }
</script>

<style lang="scss" scoped>
  #Tasks {
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    background-color: blue;
  }
</style>