<template>
  <div class="task" v-bind:class="{'taskIsComplete': isComplete}">
    <input type="checkbox" v-model="isComplete" onclick="setStaus()"/> 
    <input type="text" v-model="name" />
  </div>
</template>

<script>

export default {
  name: 'task',
  props: ['name', 'isComplete'],
  methods: {
    // setStatus: (element) => {
    //   element.
    // }
  }
}
</script>

<style lang="scss" scoped>
  .taskIsComplete {
    text-decoration: line-through;
  }

  .task {
    background-color: white;
    display: flex;
    margin: 10px 0;
    label {
      margin-left: 10px;
    }
  }
</style>