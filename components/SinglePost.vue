<template>
  <div>

      <div>
          <div class="row">
        <div class="class col-md-4">
        </div>

        <div class="class col-md-4 mt-5">
          <br>
          <input class="form-control" type="text" v-model="postText" v-if="isUpdating">
          <h2 v-else>PostTitle  :  {{post.title}}</h2>
          <br/>
          <div v-if="post.userId == userid">
                <button class="btn btn-button bg-warning" v-if="!isUpdating" @click="isUpdate">Update</button>
                <button class="btn btn-button bg-danger" v-if="!isUpdating" @click="deletePost(post.id)">Delete</button>
                <button class="btn btn-button bg-success" v-if="isUpdating" @click="updatePost">Submit</button>
          </div>
          <br/>
          <div class="mt-5">
              <h3>Comments</h3>
              <div v-for="(comment, i) in comments" :key="i">
                  <div>
                      <span>{{comment.commentText}}</span><button v-if="comment.userId == userid" @click="deleteComment(comment.id)">Delete</button>
                  </div>
              </div>
              <div>
                  <label>Comment Here:</label>
                  <input type="text" v-model="commentText">
                  <button  class="btn btn-button bg-success" @click="createComment">Comment</button>
                  </div>
        <div class="class col-md-4">
        </div>
         </div>
          </div>
        </div>
      </div>
      <!-- <h4>{{post.title}}</h4>
      <h5>Comments</h5>
        <div v-for="(comment , i) in comments" :key="i">
            <p>{{comment.commentText}}</p>
        </div> -->

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            commentText:'',
            postText:'',
            isUpdating: false,
        }
    },

computed: {
  ...mapState(['post','comments','userid']),
},
created() {
    this.$store.dispatch('getPost')
  this.$store.dispatch('getComments')
},
methods:{
    async createComment(id){
        await this.$store.dispatch('createComment', this.commentText);
        await this.$store.dispatch('getComments');
        this.commentText = '';
    },
    async deleteComment(id){
        await this.$store.dispatch('deleteComment', id);
        await this.$store.dispatch('getComments');
    },
    async deletePost(id){
        await this.$store.dispatch('deletePost', id);
        this.$router.push('/');
    },
    isUpdate(){
        this.isUpdating = true;
        this.postText = this.post.title;
    },
    updatePost(){
        this.isUpdating = false;
        this.$store.dispatch('updatePost', this.postText);
        this.$store.commit('updatePost', this.postText);
    }

}


}
</script>

<style>

</style>