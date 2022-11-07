<template>
  <div class="flex flex-row h-screen" >
    <div class="flex flex-col basis-1/2 bg-black justify-center text-center text-white p-5">
      <p class="text-7xl">WaitForMe</p>
      <span class="text-sm">
        <p class="text-sm">A personalized waiting screen,</p>
        <p class="text-sm tracking-wide leading-relaxed">for you and your organization</p>
      </span>
    </div>
    <div class="basis-1/2 bg-gray-50 flex flex-col justify-center p-5">
      <FormComp/>
    </div>


  </div>
</template>

<script>
import FormComp from '../components/FormComp.vue'
export default {
  components:{
    FormComp
  }
}
</script>
