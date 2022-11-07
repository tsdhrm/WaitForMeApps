<template>
  <div class="flex flex-row bg-white h-screen">
    <div class="flex flex-col p-32 basis-4/6">
      <div class="text-black mb-4">
        <h1 class="text-5xl font-bold">Hello there,</h1>
        <h1 class="text-5xl font-bold">thanks for joining our meeting!</h1>
      </div>
      <div class="text-gray-400 mb-40">
        <p class="text-medium mb-3">
          Meetings can be overwhelming for some people, so we'll start the
          meeting effectively at
          <span class="font-semibold"
            >{{ timeEnds.getHours() }}:{{ timeEnds.getMinutes() }}</span
          >. While you wait, please review the meeting information (or grab
          yourself some snacks and drinks!)
        </p>
        <TimerComp class="text-semibold text-4xl text-black" :endDate="new Date(timeEnds)" />
      </div>
      <div class="text-gray-700 text-sm mb-5">
        <p class="text-medium uppercase font-bold">Meeting Information</p>
        <p class="text-gray-400">
          "{{ this.$store.state.meetingInfo[0].mt }}" by
          {{ this.$store.state.meetingInfo[0].on }}
        </p>
        <p class="text-gray-400">
          Helded through {{ this.$store.state.meetingInfo[0].mp }}
        </p>
      </div>
      <span class="text-sm text-gray-300">
        Wait For Me | A personalized waiting screen for you and your
        organization.
      </span>
      <span class="text-sm text-gray-300">
        Crafted with love by Teguh Satya.
      </span>
    </div>

    <div class="p-32 bg-black text-white basis-2/6"></div>
  </div>
</template>

<script>
import TimerComp from '../components/TimerComp.vue'
export default {
  components:{
    TimerComp
  },
  data() {
    return {
      finishDate: this.setEndDate(),
      timeEnds: this.getEndTime(this.$store.state.meetingInfo[0].wd),
    };
  },
  methods: {
    setEndDate(){
      let d = new Date();
      return new Date(d.getFullYear(), d.getMonth, d.getDate(), d.getHours(), d.getMinutes()+this.$store.state.meetingInfo[0].wd, d.getSeconds(), d.getMilliseconds);
    },
    getEndTime(waitingDuration) {
      let date = new Date();
      let endDate = new Date(date);
      endDate.setMinutes(date.getMinutes() + waitingDuration);
      return endDate;
    },
  },
  computed: {
    getMeetInfo() {
      console.log(this.$store.state.meetingInfo);
      return this.$store.state.meetingInfo;
    },
  },
};
</script>

<style scoped></style>
