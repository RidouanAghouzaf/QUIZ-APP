<template>
<div class="container">
  <div class="">
    <div class="input-group flex-nowrap  pt-6 place-content-center ">
      <input type="text" class="form-control" placeholder="Search Quizzes" aria-label="Username" aria-describedby="addon-wrapping">
      <span class="input-group-text" id="addon-wrapping"><i class="fa-brands fa-searchengin"></i></span>
</div>
</div>
    <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"><i class="fa-solid fa-quote-left"></i>Type of Quiz</th>
      <th scope="col"><i class="fa-solid fa-book"></i>Description</th>
      <th scope="col"><i class="fa-solid fa-eye"></i>Views</th>
      <th scope="col"> <i class="mx-5 fa-solid fa-graduation-cap "></i>QUIZ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Informatics</td>
      <td> sql,java,uml </td>
      <td>16 viewer</td>
      <td><router-link
       class="btn btn-outline-secondary"
      :to="{name:'QuizElement',params:{category:'informatique'}}"
    >pass quiz</router-link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>mathematics</td>
      <td>algebre analyse</td>
      <td>10</td>
      <td><router-link
       class="btn btn-outline-secondary"
      :to="{name:'QuizElement',params:{category:'mathematics'}}"
    >pass quiz</router-link></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Art</td>
      <td>Islamic</td>
      <td>20viewers</td>
      <td><router-link
        class="btn btn-outline-secondary"
      :to="{name:'QuizElement',params:{category:'art'}}"
    >pass quiz</router-link></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >Sport</td>
      <td>baskteball..</td>
      <td>200viewers</td>
      <td><router-link
        class="btn btn-outline-secondary"
      :to="{name:'QuizElement',params:{category:'sport'}}"
    >pass quiz</router-link></td>
    </tr>
    
  </tbody>
</table>
<div  class="w-full flex justify-end  ">
<div class="grid grid-cols-3 gap-2 place-content-center h-48  ..." >
  <router-link
      to="/Managementquiz"
      custom
      v-slot="{ navigate }"
    ><button type="button"  class="btn btn-primary m-3" @click="navigate"
        role="link">create a Quiz</button>
      </router-link>
      <!-- <router-link
      to="/"
      custom
      v-slot="{ navigate }"
    ><button type="button" class="btn btn-secondary" @click="navigate"
        role="link">Medium Quiz</button>
      </router-link>
    -->
      <router-link
      to="/Managementquiz"
      custom
      v-slot="{ navigate }"
    > <button type="button" class="btn btn-danger m-3" @click="navigate"
        role="link"> Edit</button>
      </router-link>
    </div>
    
</div>
</div>
</template>