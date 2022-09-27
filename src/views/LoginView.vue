<template>

  <div id="page-container" class="main-content-boxed ">

      <!-- Main Container -->
      <main id="main-container">
        <!-- Page Content -->
        <div class="bg-gd-dusk">
          <div class="hero-static content content-full bg-body-extra-light">
            <!-- Header -->
            <div class="py-4 px-1 text-center mb-4">
              <a class="link-fx fw-bold" href="">
                <i class="fa fa-fire"></i>
                <span class="fs-4 text-body-color">code</span><span class="fs-4">base</span>
              </a>
              <h1 class="h3 fw-bold mt-5 mb-2">Welcome to Your Dashboard</h1>
              <h2 class="h5 fw-medium text-muted mb-0">Please sign in</h2>
            </div>
            <!-- END Header -->

            <!-- Sign In Form -->
            <div class="row justify-content-center px-1">
              <div class="col-sm-8 col-md-6 col-xl-4">
                <!-- jQuery Validation functionality is initialized with .js-validation-signin class in js/pages/op_auth_signin.min.js which was auto compiled from _js/pages/op_auth_signin.js -->
                <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                <form @submit.prevent="conectar" class="js-validation-signin"  method="POST">
                  <div class="form-floating mb-4">
                    <input v-model="login" type="text" class="form-control" id="login-username" name="login-username" placeholder="Enter your username">
                    <label class="form-label" for="login-username">Username</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input v-model="password" type="password" class="form-control" id="login-password" name="login-password" placeholder="Enter your password">
                    <label class="form-label" for="login-password">Password</label>
                  </div>
                  <div class="row g-sm mb-4">
                    <div class="col-12 mb-2">
                      <button type="submit" class="btn btn-lg btn-alt-primary w-100 py-3 fw-semibold">
                        Sign In
                      </button>
                    </div>
                    <div class="col-sm-6 mb-1">
                      <a class="btn btn-alt-secondary w-100" href="op_auth_signup.html">
                        Nueva cuenta
                      </a>
                    </div>
                    <div class="col-sm-6 mb-1">
                      <a class="btn btn-alt-secondary w-100" href="op_auth_reminder.html">
                        Forgot password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- END Sign In Form -->
          </div>
        </div>
        <!-- END Page Content -->
      </main>
     
      <!-- END Main Container -->
    </div>
    
</template>

<script>
import axios from 'axios';
import md5 from 'md5';


export default {
  name: "LoginM",
  data: () => ({
    login: 'joaquin@eisi.cc',
    password: 'zuputamadre',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
  }),
  mounted() {

  },
  methods: {
    conectar(event) {
      event.target.disabled = true;
      this.spinner = true;

      axios
          .post('http://apitest.cronoswork.com/v1/auth/login', {
            username: this.login,
            password: md5(this.password),
            client_id: 'web',
            client_secret: 'websecret'
          }, {"headers": this.headers})
          .then(response => {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/vista1');
          })
          .catch(error => {
            console.log(error);
          });
    },

  }

}

</script>
<style scoped>

 @import '../assets/css/codebase.min.css';
</style>