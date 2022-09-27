<template>
   
        <nav id="sidebar">
        <!-- Sidebar Content -->
        <div class="sidebar-content">
          <!-- Side Header -->
          <div class="content-header justify-content-lg-center">
            <!-- Logo -->
            <div class="logo">
              <span class="smini-visible fw-bold tracking-wide fs-lg">
                <img src="../assets/media/avatars/cronoswork-light.png" alt="Cronoswork">
              </span>
              <a class="" href="/vista1">
                <span class="smini-hidden">
                  <img src="../assets/media/avatars/cronoswork-light.png" alt="Cronoswork">
                </span>
              </a>
            </div>
            <!-- END Logo -->

            <!-- Options -->
            <div>
              <!-- Close Sidebar, Visible only on mobile screens -->
              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
              <button type="button" class="btn btn-sm btn-primary d-lg-none" data-toggle="layout" data-action="sidebar_close">
                <i class="fa fa-fw fa-times"></i>
              </button>
              <!-- END Close Sidebar -->
            </div>
            <!-- END Options -->
          </div>
          <!-- END Side Header -->

          <!-- Sidebar Scrolling -->
          <div class="js-sidebar-scroll">
            <!-- Side User -->
            <div class="content-side content-side-user px-0 py-0">
              <!-- Visible only in mini mode -->
              <div class="smini-visible-block animated fadeIn px-3">
                <img class="img-avatar img-avatar32" src="../assets/media/avatars/avatar1.jpg" alt="">
              </div>
              <!-- END Visible only in mini mode -->

              <!-- Visible only in normal mode -->
              <div class="smini-hidden text-center mx-auto">
                <a class="img-link" href="perfil-usuario.html">
                  <img class="img-avatar" src="../assets/media/avatars/avatar1.jpg" alt="">
                </a>
                <ul class="list-inline mt-3 mb-0">
                  <li class="list-inline-item">
                    <a class="link-fx text-dual fs-sm fw-semibold text-uppercase" href="perfil-usuario.html">J. Smith</a>
                  </li>
                  <li class="list-inline-item">
                    <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                    <a class="link-fx text-dual" data-toggle="layout" data-action="dark_mode_toggle" href="javascript:void(0)">
                      <i class="fa fa-burn"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="link-fx text-dual" @click="salir">
                      <i class="fa fa-sign-out-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- END Visible only in normal mode -->
            </div>
            <!-- END Side User -->

            <!-- Side Navigation -->
            <div class="content-side content-side-full">
              <ul class="nav-main">
                <li class="nav-main-item">
                  <a class="nav-main-link active" href="be_pages_dashboard.html">
                    <i class="nav-main-link-icon fa fa-house-user"></i>
                    <span class="nav-main-link-name">Dashboard</span>
                  </a>
                </li>
            
                <li class="nav-main-heading">Empresa</li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="/vista2">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Productividad Diaria</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Tiempos por Grupos</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Grupos Improductivos</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Tiempo por Procesos</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Entrada/Salida por Procesos</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Entrada/Salida por Empleado</span>
                  </a>
                </li>
                <li class="nav-main-heading">Fichaje</li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Jornadas</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Jornadas</span>
                  </a>
                </li>
                <li class="nav-main-heading">Configuración</li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Jornadas</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Departamentos</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Vacaciones</span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- END Side Navigation -->
          </div>
          <!-- END Sidebar Scrolling -->
        </div>
        <!-- Sidebar Content -->
      </nav>
      <!-- END Sidebar -->

      <!-- Header -->
      <header id="page-header">
        <!-- Header Content -->
        <div class="content-header">
          <!-- Left Section -->
          <div class="d-flex align-items-center space-x-2">
            <!-- Toggle Sidebar -->
            <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="sidebar_toggle">
              <i class="fa fa-fw fa-bars"></i>
            </button>
            <!-- END Toggle Sidebar -->

           
            <!-- Open Search Section -->
            <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
            <button type="button" class="btn btn-sm btn-alt-secondary d-sm-none" data-toggle="layout" data-action="header_search_on">
              <i class="fa fa-fw fa-search"></i>
            </button>
            <!-- END Open Search Section -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="space-x-1">
            <!-- Toggle Side Overlay -->
            <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="side_overlay_toggle">
              <span class="badge bg-danger me-1 animated swing infinite">
                <i class="fa fa-exclamation-triangle"></i>
              </span>
              <i class="fa fa-fw fa-flag"></i>
            </button>
            <!-- END Toggle Side Overlay -->
          </div>
          <!-- END Right Section -->
        </div>
        <!-- END Header Loader -->
      </header>
      <!-- END Header -->

</template>

<script>

export default {
  name: 'NavMod',
  components: {
  
  },
  methods: {
    salir(event) {
      localStorage.removeItem('token')
      this.$router.push('/login');
    }
  }
}
</script>
