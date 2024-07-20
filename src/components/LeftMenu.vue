<template>
  <div class="menus">
    <button class="btn"> ABOUT ME </button>
    <button class="btn"> SKILLS </button>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .menus {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }

  .menus button {
    display: block;
    margin: 0 10px 0 10px;
    padding: 10px 0 10px 0;
    white-space: nowrap;
    width: 100px;
    background: #C73659;
    white-space: nowrap;
    color: #EEEEEE;
    border-radius: 10px;
    font-family: Tw Cen MT;
  }

  
  .menus button:hover {
    display: block;
    margin: 0 10px 0 10px;
    padding: 10px 0 10px 0;
    white-space: nowrap;
    width: 100px;
    background: #A91D3A;
    white-space: nowrap;
    color: #EEEEEE;
    border-radius: 10px;
    font-family: Tw Cen MT;
  }

</style>
