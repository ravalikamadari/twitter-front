<template>
<div>
     <div>

  <nav class="navbar navbar-expand-lg" style="background-color:#acffff">
  <div class="container-fluid">
    <nuxt-link class="navbar-brand" to="/">Twitter</nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <nuxt-link class="nav-link active" aria-current="page" to="/Post">CreatePost</nuxt-link>
        </li>
          <li class="nav-item">
          <nuxt-link class="nav-link active" aria-current="page" to="/Profile">Profile</nuxt-link>
        </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>

</div>

</template>

<script>
export default {




}
</script>

<style>

</style>