<template>
  <div>
      <UserHome/>
      <div>
          <div class="row">
        <div class="class col-md-5 ">

        </div>
        <div class="class col-md-4 mt-5">
         <h4> <b>UserDetails  :</b></h4>
         <hr>
          <label>
              Name:
              <input type="text" v-model="editname" v-if="isUpdating">
              <span v-else>{{name}}</span>
              <button class="btn btn-button bg-info" v-if="!isUpdating" @click="isUpdate">Edit</button>
              <button class="btn btn-button bg-success" v-if="isUpdating" @click="updateName">Submit</button>
          </label><br>
          <hr>
          <label class="p-2">
              Email: {{email}}
          </label>
          <hr>
      </div>
        <div class="class col-md-4">

        </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

    computed: {
        ...mapState(['name','email']),
    },
    data() {
        return {
            isUpdating: false,
            editname: '',
        }
    },
    methods: {
        isUpdate() {
            this.isUpdating = true
            this.editname = this.name;
        },
        updateName() {
            this.isUpdating = false;
            this.$store.dispatch('updateName', this.editname);
            this.$store.commit('updateName', this.editname);
        },
    }

}
</script>

<style>

</style>