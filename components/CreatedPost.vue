<template>
  <div>
    <div class="row">
        <div class="class col-md-4">

        </div>
        <div class="class col-md-4">
           <div class="mt-5">
    <label for="exampleInputEmail1" class="form-label"><b>Create Post </b>  :</label>
    <input type="text"
        v-model="post"
        placeholder="Enter Title"
        required>
         <button  @click="addPost(post)" class="addBtn bg-success">Submit</button>
  </div>
        </div>
        <div class="class col-md-4">

        </div>
    </div>



  </div>
</template>

<script>
export default {
    data() {
        return {
            post: ''
        }
    },

    methods: {
        async addPost(post) {
          await this.$store.dispatch('addPost', post);
          await this.$store.dispatch('getAllPosts');
        },
    }

}
</script>

<style>

</style>