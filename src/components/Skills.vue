<template>

    <div class="main">
        <div class="container-skill container">
        
            <h1 class="skills">Skills</h1>
            <h3 class="skills-title"> Programming </h3>

            <div class="programming-table">
                <table class="table table-bordered  table-hover">
                    <thead>
                        <th>Front End</th>
                        <th>Scripting</th>
                        <th>Server Side / Database</th>
                    </thead>
                    <tr>
                        <td>HTML</td>
                        <td>JavaScript</td>
                        <td>Native PHP</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>JQuery</td>
                        <td>Laravel</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>Ajax</td>
                        <td>Codeigniter</td>
                    </tr>
                    <tr>
                        <td>W3css</td>
                        <td>Axios</td>
                        <td>MSSQL</td>
                    </tr>
                    <tr>
                        <td>VueJs</td>
                        <td></td>
                        <td>MySQL</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Oracle</td>
                    </tr>
                </table>
            </div>
            <h3 class="skills-title"> Software Tools </h3>
            
            <div class="tools-table">
                <table class="table table-bordered  table-hover">
                    <tr>
                        <td>Azure Devops</td>
                        <td>Jira</td>
                        <td>Git Hub</td>
                    </tr>
                    <tr>
                        <td>Postman</td>
                        <td>Confluence</td>
                        <td>Docker</td>
                    </tr>    
                    <tr>
                        <td>AWS</td>
                        <td></td>
                        <td></td>
                    </tr>       
                </table>
            </div>
                
            <h3 class="skills-title">Others</h3>
            <div class="others-table">
                <table class="table table-bordered  table-hover">
                    <tr>
                        <td>MS Office</td>
                        <td>Adobe PS6</td>
                        <td>Video Editing</td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
        



</template>
<script setup>




</script>

<style scoped>
    /* .main {
        background-attachment: fixed;
        background-image: url('@/assets/imgs/skills-bg2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    } */
    .programming {
        color: #eee;
        text-align: left;
    }
    .container-skill {
        text-align: center;
       /* background-color: rgba(255, 255, 255, 0.8); */
        padding: 50px 0 30px 0;
    }
    .skills {
        padding: 5px 0 40px 0;
        font-weight: bold;
        font-family:'Franklin Gothic Medium';
        color: #bbbbbb;
        font-size: 3rem; 
    }
    table {
        border: #353535;
    }
    table thead th {
        background-color: #bbbbbb;
        color: rgb(90, 90, 90);
        font-weight: bold;
    }
    table tr td {
        background-color: transparent;
        color: #eee;
    }
    .programming-table,
    .tools-table,
    .others-table {
        
    }
    .skills-title {
        padding: 20px 0 15px 0;
        font-size: 2rem;
        font-weight: bold; 
        color: #C73659; 
        font-family: 'Gill Sans MT';
    }
    
</style>
