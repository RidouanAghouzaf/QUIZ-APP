<script>
import { RouterLink } from 'vue-router';




</script>
<template>
    <aside class=" h-full w-2/12  bg-blue-300 ">
<ul class="flex flex-col justify-evenly items-center  h-4/6 ">
    <li class="inset-0"><i class="fa-solid fa-circle-question"></i><span> The Questions</span> </li>
   <router-link to="/Quiz"> <li class="w-full flex justify-start items-center"><i class="mx-5 fa-solid fa-graduation-cap "></i><span>Quiz</span></li> </router-link>
    <router-link to="/"> <li class="w-full flex justify-start items-center"><i class="mx-5 fa-solid fa-house"></i><span>Home</span></li></router-link>
   <router-Link to=" /topics"> <li class="w-full flex justify-start items-center"><i class="mx-5 fa-solid fa-list-check"></i><span>Topics</span></li></router-Link>
    <router-link to="/score"><li class="w-full flex justify-start items-center"><i class="mx-5 fa-solid fa-square-poll-vertical"></i><span>Score</span></li></router-link>
   <router-link to="/settings" ><li class="w-full flex justify-start items-center"><i class="mx-5 fa-solid fa-gear"></i><span>Settings</span></li></router-link>
    
</ul>
    </aside>
</template>