<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submitForm">
    <div class="mb-4">
      <label
        for="MeetingTitle"
        class="block text-gray-700 text-sm font-bold mb-2"
      >
        Meeting Title
      </label>
      <input
        v-model="meetingtitle" 
        autocomplete="off"
        placeholder="Your meeting title"
        type="text"
        class="hover:border-gray-500 shadow appreance-none border rounded full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label for="orgName" class="block text-gray-700 text-sm font-bold mb-2">
        Organization Name
      </label>
      <input
        v-model="organizationame" 
        autocomplete="off"
        placeholder="Your organization name"
        type="text"
        class="hover:border-gray-500 shadow appreance-none border rounded full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label
        for="meetingPlatform"
        class="block text-gray-700 text-sm font-bold mb-2"
        >Your meeting platform
      </label>
      <div class="inline-block relative w-full">
        <select
          v-model="meetingplatform"
          class="shadow appearance-none border rounded full w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>Select platform</option>
          <option>Zoom Meeting</option>
          <option>Google Meet</option>
          <option>Microsoft Teams</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <label
        for="waitingDuration"
        class="block text-gray-700 text-sm font-bold mb-2"
      >
        Waiting duration (Minutes)
      </label>
      <div class="inline-block relative w-full">
        <select
          v-model="waitduration"
          class="shadow appearance-none border rounded full w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>Select waiting duration</option>
          <option
            v-for="minutes in minutesOptions"
            :key="minutes" :value="minutes.num"
          >
            {{ minutes.values}} 
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  <button
    class="w-full bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded"
  >
    Show waiting screen
  </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      meetingplatform:'',
      minutesOptions: this.getAvailMins(),
      meetingtitle: "",
      organizationame: "",
      waitduration:"",
    };
  },
  methods: {
    getAvailMins() {
      let arrayOfMins = [];
      for (let index = 5; index < 60; index += 5) {
        arrayOfMins.push({ num: index, values: `${index} Minutes` });
      }
      return arrayOfMins;
    },
    submitForm(){
      const minfo = {
        mt: this.meetingtitle,
        on: this.organizationame,
        mp: this.meetingplatform,
        wd: this.waitduration
      };
      this.$store.commit('addMeetingInfo', minfo)
      this.$router.push('display')
      
    }
  },
};
</script>

<style scoped></style>
