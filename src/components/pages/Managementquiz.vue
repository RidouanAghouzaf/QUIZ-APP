<script setup>

</script>

<template>
<div class="container flex flex-col items-center justify-center">
  <form class="w-75 h-75 flex flex-col items-center justify-around">
    <h3 text-xl>Adding Quiz</h3>
  <div class="container w-full ">
    
  <div class="mb-3">
    <label for="Name Quiz" class="form-label">Name quiz</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="Description" class="form-control" id="exampleInputDescription">
  </div>
  <div class="mb3">
<label>Type Quiz</label>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">Informatics</option>
  <option value="2">mathematics</option>
  <option value="3">Art</option>
</select>
</div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="w-full flex justify-end">
    <button type="submit" class="btn btn-primary m-3">Submit Quiz</button>
  
  </div>
</div>
</form>
</div>



</template>

