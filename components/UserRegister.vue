<template>
  <div>
        <div class="row">
        <div class="class col-md-4">

        </div>
        <div class="class col-md-4 mt-5">
  <form @submit.prevent="registerForm">
       <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="name"
        placeholder="Enter Name"
        required>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="email"
        placeholder="Enter Email"
        required>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    v-model="password"
    placeholder="Enter Password"
    required>
  </div>
  <button type="register" class="btn btn-primary">Register</button>


</form>
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
            name:'',
            email:'',
            password:''
        }
    },

     methods:
  {
    async registerForm() {
      await this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,

      })
       this.$router.push('/')
    }
  }

}
</script>

<style>

</style>