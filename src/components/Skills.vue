<template>

    <div>
        <div class="container container-skill">

            <h1 class="skills">Skills</h1>
            <h3 class="skills-title"> Programming </h3>
            <div class="programming-table">
                <table class="table table-bordered  table-hover">
                    <thead>
                        <th>HTML</th>
                        <th>JavaScript</th>
                        <th>Native PHP</th>
                    </thead>
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
                        <td>VueJs</td>
                    </tr>
                    <tr>
                        <td>MySQL</td>
                        <td>MSSQL</td>
                        <td>Oracle</td>
                    </tr>
                    <tr>
                        <td>API Integration</td>
                        <td></td>
                        <td></td>
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
import imageSrc from '@/assets/imgs/solomak.jpg';



</script>

<style scoped>
    .grad {
        width: 80%;
    }
    .container-skill {
        
        text-align: center;
        border:1px solid  yellow;
        padding: 50px 0 30px 0;
    }
    .skills {
        padding: 5px 0 10px 0;
    }
    .programming-table,
    .tools-table,
    .others-table {
        padding: 0 10% 0 10%;
    }
    .skills-title {
        padding: 20px 0 15px 0;
    }
    
</style>
