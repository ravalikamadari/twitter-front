<template>
  <div class="mt-3">
      <h5 class="mb-3">Posts:</h5>

  <ul class="list-group">
  <li class="list-group-item-action" v-for="(post , i) in posts" :key="i">
      <p @click="postpage(post.id)">{{post.title}}</p>
      </li>
      <!-- <div v-for="(post , i) in posts" :key="i"> -->
          <!-- <p>{{post.title}}</p>
      </div> -->

    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

    computed: {
        ...mapState(['posts']),
    },
    created() {
        this.$store.dispatch('getPosts')
    },
    methods:{
        postpage(id){
            // this.$store.dispatch('getPost',id)
            this.$router.push('/postpage/' + id)
        }
    }
}
</script>

<style>

</style>