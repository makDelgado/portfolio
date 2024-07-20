<template>
    <div class="container-social-media">
        <button class="btn-social" v-if="showButtons">
            <img src="@/assets/imgs/social/fb.png" alt="">
        </button>
        <button class="btn-social" v-if="showButtons">
        
            <img src="@/assets/imgs/social/gmail.png" alt="">
        </button>
        <button class="btn-social" v-if="showButtons">
        
            <img src="@/assets/imgs/social/viber.png" alt="">
        </button>
        <button @click="toggleButtons" class="toggles">
        
            <span v-if="showButtons"><i class="	fa fa-close"></i> </span>
            <span v-else><i class="fa fa-phone"></i></span>

        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showButtons = ref(false);

const toggleButtons = () => {
    showButtons.value = !showButtons.value;
};
</script>

<style scoped>
.container-social-media {
    margin: 5px;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 5px;
}
.btn-social {
    margin: 2px;
    background: transparent;
    border: 0;
}
.btn-social:hover {
    opacity: 0.7;
}
.btn-social img {
    width: 30px;
}
.toggles {
    background-color: #C73659;
    color: #eee;
    font-size: 1rem;
    border: 0px;
    padding: 8px;
    border-radius: 5px;
}
.toggles:hover {
    color: #e0e0e0;
    background-color: #912841;
}
</style>
