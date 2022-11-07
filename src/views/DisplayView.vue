<template>
  <div>
    {{this.$store.state.meetingInfo}}
    
  </div>
</template>

  <script>
  export default {
    computed: {
      getMeetInfo(){
        console.log(this.$store.state.meetingInfo)
        return this.$store.state.meetingInfo;
      },
      
    },
    
  }
  </script>

<style scoped>
  
</style>
