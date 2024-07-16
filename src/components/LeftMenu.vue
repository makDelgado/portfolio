<template>
  <div class="menus">
    <button class="btn btn-danger"> About Me </button>
    <button class="btn btn-danger"> Skills </button>
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
    border:1px solid  yellow;
  }

  .menus button {
    display: block;
    margin: 0 10px 0 10px;
    white-space: nowrap;
    width: 100px;
  }

</style>
