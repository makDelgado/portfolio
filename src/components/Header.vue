<template>
    <div>

        <div class="row">
            <div class="col-lg-5 col-md-5"> 
            
            <div class="container-img">
                <img class="rounded-circle img-fluid grad" :src="imageSrc" alt="Description of image">
                <LeftMenus />
            </div>



                
            </div>
            <div class="col-lg-7 col-md-7">
                
            <div class="container-headline">
                    <h1> Hi, I'm </h1>
                    <h2> Mark Raul Delgado,</h2>
                    <h3> Systems Engineer</h3>
                    <RightMenu />
            
            </div>
                
            </div>
        
        </div>

        

    </div>




</template>

<script setup>
import LeftMenus from './LeftMenu.vue';
import RightMenu from './RightMenu.vue';
import imageSrc from '@/assets/imgs/solomak.jpg';

</script>

<style scoped>
    .grad {
        max-width: 60%; 
        height: auto;
        display: block;
    }
    .container-img {
        height: 100vh; 
        display: flex;
        align-items: center;
        justify-content: center;
        border:1px solid yellow;
        position: relative
        
    }
    .container-headline {
        height: 100vh; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border:1px solid  yellow;
        position: relative
    }
     .container-headline h1, h2 {
        font-size: 4rem; /* Larger font size for h1 */
        font-weight: bold; /* Bold font weight */
        margin-bottom: 10px; /* Adjust spacing between h1 and h3 */
        color: #333; /* Example color */
    }
    .container-headline h3 {
        font-size: 2rem; /* Font size for h3 */
        font-weight: bold; /* Bold font weight */
        color: #555; /* Adjusted color for h3 */
    }
    .container-headline p {
        font-size: 1.5rem; /* Font size for p */
        font-style: italic; /* Italic style */
        color: #777; /* Adjusted color for p */
    }

  
</style>
