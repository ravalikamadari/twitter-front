<template>
  <div>
      <div v-if="token == null">
    <MainHeader />
    <UserLogin />
    </div>
    <div v-else>
      <UserHome />
      <Posts/>


    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainHeader from '../components/MainHeader.vue'
import UserLogin from '../components/UserLogin.vue'
import UserHome from '../components/UserHome.vue'
import Posts from '~/components/Posts.vue'
export default {
  name: 'IndexPage',

  components: {
    MainHeader,
    UserLogin,
    UserHome,
    Posts,

  },
  computed: {
    ...mapState(['token']),
  },

}
</script>
