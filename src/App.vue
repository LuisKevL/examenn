<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import router from "./router/index";
import LandingPage from "./components/LandingPage.vue";
import Layout from "@/components/Layout.vue";
</script>

<template>
  <div class="App">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
