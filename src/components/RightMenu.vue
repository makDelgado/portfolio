<template>
  <div class="menus">
    <button class="mx-3"> HIRE ME ! </button> 
    <button class="mx-3"> Portfolio</button>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .menus {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    
  }

  .menus button {
    display: block;
    white-space: nowrap;
    width: 180px;
    height: 50px;
    background: transparent;
    border: 2px solid #d3d3d3;
    color: #EEEEEE;
    border-radius: 10px;
    font-family: Tw Cen MT;
  }
  
  .menus button:hover {
    display: block;
    white-space: nowrap;
    width: 180px;
    height: 50px;
    background: transparent;
    border: 2px solid #d3d3d3;
    border-radius: 5px;
    color: #d3d3d3;
  }

</style>
