<template>
  <div id="app">
    <div id="cover">
      <Header></Header>
      <Todo></Todo>
    </div>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todos.vue'

export default {
  components: { 
    Header,
    Todo
  }
};
</script>

<style>
</style>
