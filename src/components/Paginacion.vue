<template>
  <b-container class="mt-5">
    <h1>Lista de Autos</h1>
    <b-col sm="5" md="6" class="my-1">
      <b-form-group label="" label-for="per-page-select" label-cols-sm="6" label-cols-md="4" label-cols-lg="3"
        label-align-sm="right" label-size="sm" class="mb-0">
      </b-form-group>
    </b-col>
    <b-table id="my-table" :items="vehicle" :per-page="perPage" :current-page="currentPage" :fields="fields"
      :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small></b-table>
    <div class="overflow-auto">
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
      <p class="mt-3 p">Página: {{ currentPage }}</p>
    </div>
    <b-breadcrumb class="bread" :items="items"></b-breadcrumb>
  </b-container>
</template>
  
<script>
import vehicle from "../services/Vehiculo";
export default {
  name: 'Paginacion',
  data() {
    return {

      filtro: null,
      sortBy: "name",
      sortDesc: false,
      perPage: 5,
      rows: 3,
      currentPage: 1,
      vehicle: [],
      fields: [
        { key: "year", label: "Año", sortable: true },
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "serie", label: "Serie", sortable: true },

      ],
    };
  },
  mounted() {
    this.obtenerAutos();
  },
  methods: {
    async obtenerAutos() {
      try {
        const data = await vehicle.obtenerAutos(
          parseInt(this.currentPage),
          parseInt(this.perPage),
          this.rows
        );
        this.vehicle = data.content;
        this.rows = data.totalElements;
      } catch (error) {
        console.error(error);
      }
    },

  },
};
</script>
  