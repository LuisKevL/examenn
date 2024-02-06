<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group label="Marca:" label-for="marca">
        <b-form-input id="marca" v-model="marca" type="text" pattern="[A-Za-z0-9]+" required></b-form-input>
      </b-form-group>

      <b-form-group label="Modelo:" label-for="modelo">
        <b-form-input id="modelo" v-model="modelo" type="text" pattern="[A-Za-z0-9]+" required></b-form-input>
      </b-form-group>

      <b-form-group label="Año de fabricación:" label-for="año">
        <b-form-input id="año" v-model="año" type="number" :min="1900" :max="new Date().getFullYear()" required></b-form-input>
      </b-form-group>

      <b-form-group label="Serie:" label-for="numeroSerie">
        <b-form-input id="numeroSerie" v-model="numeroSerie" type="text" pattern="[A-Z]{4}\d{3}-\d{2}[A-Z]{2}" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Borrar datos</b-button>
    </b-form>
    <b-card v-if="showResult" class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ formData }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  data() {
    return {
      marca: '',
      modelo: '',
      año: null,
      numeroSerie: '',
      showResult: false, 
      formData: {}, 
    };
  },
  methods: {
    onSubmit() {
      if (!this.validateForm()) {
        return;
      }
      this.showResult = true;
      this.formData = {
        marca: this.marca,
        modelo: this.modelo,
        año: this.año,
        numeroSerie: this.numeroSerie,
      };
    },
    onReset() {
      this.showResult = false;
      this.formData = {};
      this.marca = '';
      this.modelo = '';
      this.año = null;
      this.numeroSerie = '';
    },
    validateForm() {
      if (!/^[A-Za-z0-9]+$/.test(this.marca) || !/^[A-Za-z0-9]+$/.test(this.modelo)) {
        alert('Marca y model sol numeros y letras');
        return false;
      }
      if (this.año > new Date().getFullYear() || this.año < 1900) {
        alert('Año de fabricación 1900 0 más');
        return false;
      }
      if (!/^[A-Z]{4}\d{3}-\d{2}[A-Z]{2}$/.test(this.numeroSerie)) {
        alert('FORMATO INCORRECTO');
        return false;
      }
      return true;
    },
  },
};
</script>
