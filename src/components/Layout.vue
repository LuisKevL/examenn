<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col>
                    <b-navbar toggleable="lg" type="light" variant="light">
                        <b-navbar-brand href="#">BIENVENIDO</b-navbar-brand>
                        <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
                        <b-navbar-nav>
                            <router-link to="/landing" class="nav-item nav-link">landing</router-link>
                        </b-navbar-nav>
                        <b-collapse id="navbar-nav" is-nav>
                        </b-collapse>
                    </b-navbar>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="3" md="4" lg="4">
                    <b-sidebar-header z-index="-4" id="sidebar" shadow visible no-close-on-route-change no-header-close>
                        <b-nav vertical class="pt-5">
                            <b-nav-item :to="'inicio'">Inicio</b-nav-item>
                            <b-nav-item :to="'formulario'">Formulario</b-nav-item>
                            <b-nav-item :to="'paginacion'">Paginacion</b-nav-item>
                        </b-nav>
                    </b-sidebar-header>
                </b-col>

                <b-col>
                    <router-view />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
  
<script>
export default {
    name: 'Layout',
};
</script>
  
<style></style>
  