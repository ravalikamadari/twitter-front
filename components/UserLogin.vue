<template>
  <div>
      <div>
          <div class="row">
        <div class="class col-md-4">
        </div>

        <div class="class col-md-4 mt-5">
          <h1>{{this.$store.state.errMsg}}</h1>
     <form @submit.prevent="loginForm">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="email"
        placeholder="Enter email"
        required>
    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    v-model="password"
    placeholder="Enter password"
    required>
  </div>
  <!-- <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
        <div class="class col-md-4">
        </div>
    </div>
      </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      email:'',
      password:''
    }
  },

  methods:
  {
    async loginForm() {
      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })

      // await this.$store.dispatch('getAllPosts')
    }
  }



}
</script>

<style>

</style>