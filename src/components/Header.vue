<template>
    <div class="main row">

        <div class="row">
            <div class="col-lg-5 col-md-5"> 
            
            <div class="container-img">
                <img class="rounded img-fluid grad" :src="imageSrc" alt="Description of image">
                <LeftMenus />
            </div>



                
            </div>
            <div class="col-lg-7 col-md-7">
                
            <div class="container-headline">
                    <h1> Hi, I'm </h1>
                    <h2> Mark Raul Delgado, MIT</h2>
                    <h3> Systems Engineer / IT Professor</h3>
                    <RightMenu />
            
            </div>
                
            </div>
        
        </div>

        

    </div>




</template>

<script setup>
import LeftMenus from './LeftMenu.vue';
import RightMenu from './RightMenu.vue';
import imageSrc from '@/assets/imgs/solomak.png';

</script>

<style scoped>
    .main {
        background: #151515;
    }
    .grad {
        width: 80%;
        height: auto;
        display: block;
    }
    .container-img {
        background: imageSrc;
        height: 100vh; 
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
    }
    .container-headline {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
    }
    .container-headline h1, h2 {
        font-size: 3.5rem; 
        font-weight: bold; 
        margin-bottom: 10px; 
        color: #bbbbbb; 
        font-family:'Franklin Gothic Medium';
    }
    .container-headline h3 {
        font-size: 2rem;
        font-weight: bold; 
        color: #C73659; 
        font-family: 'Gill Sans MT';
    }
    

  
</style>
