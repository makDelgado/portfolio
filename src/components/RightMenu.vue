<template>
  <div class="menus">
    <button class="btn btn-danger"> HIRE ME ! </button>
    <button class="btn btn-danger"> Portfolio</button>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .menus {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
     flex-direction: column;
    border:1px solid  yellow;
  }

  .menus button {
    display: block;
    margin: 5px 0 0px 0;
    white-space: nowrap;
    width: 180px;
    height: 50px;
  }

</style>
