<script>
import { RouterLink } from 'vue-router';




</script>
<template>
    <aside class=" h-full w-2/12  bg-gray-300">
<ul class="flex flex-col justify-around  items-center h-50">
    <li class="inset-0"><span><i class="fa-solid fa-circle-question"></i> The Questions</span> </li>
    <li class="w-full flex justify-start items-center"><router-link to="/"> <span><i class="mx-5 fa-solid fa-graduation-cap "></i> Quiz2</span></router-link></li>
    <li class="w-full flex justify-start items-center"><router-link to="/Quiz"> <span><i class="mx-5 fa-solid fa-graduation-cap "></i>Quiz1</span> </router-link></li>
    <li class="w-full flex justify-start items-center"><router-Link to="/About"><span><i class="mx-5 fa-solid fa-list-check"></i>About </span></router-link></li>
    <li class="w-full flex justify-start items-center"><router-link to="/Managementquiz"><span><i class="mx-5 fa-solid fa-gear"></i>settings</span></router-link></li>
   <li class="w-full flex justify-start items-center"><router-link to="/Weight" ><span><i class="mx-5 fa-solid fa-square-poll-vertical"></i>weight</span></router-link></li>
</ul>
    </aside>
</template>