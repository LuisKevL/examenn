<template>
    <div>
      <b-button v-b-toggle.sidebar-1>Menú principal</b-button>
      <b-sidebar id="sidebar-1" title="Menú" shadow v-model="sidebarOpen">
        <div class="px-3 py-2">
          <b-nav-list>
            <router-link to="/" class="nav-item nav-link">Inicio</router-link>
            <router-link to="/formulario" class="nav-item nav-link">Formulario</router-link>
            <router-link to="/paginacion" class="nav-item nav-link">Paginación</router-link>
          </b-nav-list>
        </div>
      </b-sidebar>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        sidebarOpen: false, // Cierra el sidebar por defecto
      };
    },
  };
  </script>
  