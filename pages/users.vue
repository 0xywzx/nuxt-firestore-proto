<template>
  <div>
    <h1>firestore contents here</h1>
    <ul>
      <li v-for="(user, userIdx) in users" :key="userIdx">
        <ul>
          <li>name: {{ user.name }}</li>
          <li>email: {{ user.email }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'
import { mapGetters } from 'vuex'

export default {
  created: function () {
    this.$store.dispatch('setUsersRef', db.collection('users'))
  },
  computed: {
    ...mapGetters({ users: 'getUsers' })
  },
}
</script>

<style>
</style>