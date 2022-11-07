import { createStore } from 'vuex'

export default createStore({
  state: {
    meetingInfo: [],
    
  },
  getters: {
  },
  mutations: {

     addMeetingInfo(state, info){
      state.meetingInfo.push(info);

    }
  },
  actions: {
  },
  modules: {
  }
})
