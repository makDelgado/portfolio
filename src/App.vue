<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
<div class="row">
  <div class="gradient-background">


      <HomeView />


  </div></div>
      <!-- <HelloWorld msg="You did it!" /> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(to right, red, black);
  height: 100vh; /* Adjust this value as needed */
  /* display: flex; */
  /* align-items: center */;
  /* justify-content: center */;
}
</style>