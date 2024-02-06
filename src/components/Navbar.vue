<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Bienvenidos</b-navbar-brand>
  
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" class="nav-item nav-link">Inicio</router-link>
            <router-link to="/formulario" class="nav-item nav-link">Formulario</router-link>
            <router-link to="/paginacion" class="nav-item nav-link">Paginación</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  