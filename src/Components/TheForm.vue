<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <div class="w-full flex flex-col items-start gap-y-5">
      <button @click="$router.push('/')" type="button" class="py-1.5 w-1/3 bg-dark-blue text-white font-roboto rounded-md">BACK</button>
      <form action="" class="w-full flex flex-col gap-y-5 p-4 rounded-xl shadow-md">
        <div class="flex flex-col items-start">
          <label for="" class="font-roboto text-gray">First name:</label>
          <input type="text" name="" id="" class="p-2 w-full rounded-md border-2 border-dark-blue">
          <label for="" class="font-roboto text-gray">Last name:</label>
          <input type="text" name="" id="" class="p-2 w-full rounded-md border-2 border-dark-blue">
        </div>
        <div class="flex flex-col items-start">
          <label for="" class="font-roboto text-gray">Email:</label>
          <input type="email" name="" id=""  class="p-2 w-full rounded-md border-2 border-dark-blue">
        </div>
        <div class="flex flex-col">
          <span>
            <label class="font-roboto text-gray">Gender:</label>
          </span>
          <span class="flex flex-row gap-x-1.5">
            <input type="radio" id="male" name="gender" value="Male" />
            <label for="male" class="font-roboto text-gray">Male</label>
          </span>
          <span class="flex flex-row gap-x-1.5">
            <input type="radio" id="female" name="gender" value="Female" />
            <label for="female" class="font-roboto text-gray">Female</label>
          </span>
        </div>
      </form>
      <button type="submit" class="font-roboto w-full text-white bg-dark-blue py-2 rounded-md">Submit</button>
    </div>
  </div>
</template>
<script setup>

</script>