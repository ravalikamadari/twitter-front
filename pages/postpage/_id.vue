<template>
  <div>
      <UserHome/>
        <SinglePost :postId="this.$route.params.id" />
  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit('setPostId', this.$route.params.id)
  }


}
</script>

<style>

</style>