<template>
  <div class="container">
      <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>

     <table class="table is-narrow">
       <tbody>
         <tr>
           <th>todo</th>
           <th>limit</th>
         </tr>
       </tbody>
       <tbody>
         <tr v-for="(todo, index) in $store.getters.getTodos" :key="index">
           <td>{{todo.todo}}</td>
           <td>{{todo.limit}}</td>
         </tr>
       </tbody>
     </table>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>