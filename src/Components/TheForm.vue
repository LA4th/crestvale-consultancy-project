<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <div class="w-full max-w-md flex flex-col items-start gap-y-5">
      
      <!-- BACK BUTTON -->
      <button 
        @click="$router.push('/')" 
        type="button" 
        class="py-1.5 w-1/3 bg-dark-blue text-white font-roboto rounded-md"
      >
        BACK
      </button>

      <!-- FORM -->
      <form 
        @submit.prevent="handleSubmit" 
        class="w-full flex flex-col gap-y-5 p-4 rounded-xl shadow-md"
      >
        <div class="flex flex-col gap-y-2">
          <label class="font-roboto text-gray">First name:</label>
          <input 
            v-model="firstName"
            type="text" 
            class="p-2 w-full rounded-md border-2 border-dark-blue focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label class="font-roboto text-gray">Last name:</label>
          <input 
            v-model="lastName"
            type="text" 
            class="p-2 w-full rounded-md border-2 border-dark-blue focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div class="flex flex-col gap-y-2">
          <label class="font-roboto text-gray">Email:</label>
          <input 
            v-model="email"
            type="email" 
            class="p-2 w-full rounded-md border-2 border-dark-blue focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div class="flex flex-col gap-y-1">
          <label class="font-roboto text-gray">Gender:</label>
          <label class="flex items-center gap-x-2">
            <input v-model="gender" type="radio" name="gender" value="Male" />
            <span class="font-roboto text-gray">Male</span>
          </label>
          <label class="flex items-center gap-x-2">
            <input v-model="gender" type="radio" name="gender" value="Female" />
            <span class="font-roboto text-gray">Female</span>
          </label>
        </div>

        <button 
          type="submit" 
          class="font-roboto w-full text-white bg-dark-blue py-2 rounded-md hover:bg-blue-900 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import axios from 'axios' // Import natin ang Axios

  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const gender = ref('')

  async function handleSubmit() {
      // 1. I-compose ang data na ipapadala
      const formData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          gender: gender.value
      }

      // 2. I-set ang URL ng PHP script mo
      const backendUrl = 'http://crestvale.wuaze.com/submit_user.php' // Palitan ito ng tamang path!

      try {
          // Ipadala ang data gamit ang POST request. 
          // Axios will automatically send it as JSON.
          const response = await axios.post(backendUrl, formData, {
              headers: {
                  'Content-Type': 'application/json'
              }
          })

          // 3. I-handle ang successful response
          alert(`Success: ${response.data.message}`)
          
          // I-clear ang form fields pagkatapos mag-submit
          firstName.value = ''
          lastName.value = ''
          email.value = ''
          gender.value = ''

      } catch (error) {
          // 4. I-handle ang errors (galing sa PHP o network)
          if (error.response) {
              // Error response galing sa server (e.g., 400 or 500 status code)
              alert(`Error: ${error.response.data.message || 'Server error occurred.'}`)
          } else {
              // Network error
              alert('Network Error: Could not reach the server.')
          }
          console.error('Submission Error:', error)
      }
  }
</script>
