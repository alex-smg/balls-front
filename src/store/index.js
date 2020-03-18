import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userSession: {
      email: '',
      image: '',
      height: '',
      birth: '',
      postPlayer: '',
      level: '',
      gender: '',
      club: '',
      firstname: '',
      lastname: '',
    }
  },
  mutations: {
    pushDataUserSession(state, data) {
          state.userSession.email = data.email,
              state.userSession.image = data.image,
              state.userSession.height = data.height,
              state.userSession.birth = data.birth,
              state.userSession.postPlayer = data.postPlayer,
              state.userSession.level = data.level,
              state.userSession.gender = data.gender,
              state.userSession.club = data.club,
              state.userSession.firstname = data.firstname,
              state.userSession.lastname = data.lastname
    },
    deleteDataUserSession(state) {
      state.userSession = {
        email: '',
            image: '',
            height: '',
            birth: '',
            postPlayer: '',
            level: '',
            gender: '',
            club: '',
            firstname: '',
            lastname: '',
      }
    }
  }, actions: {
    login({commit}, credential) {
      axios.post('http://localhost:3000/person/login', {
        email: credential.email,
        password: credential.password
      }).then((response) => {
        /* eslint-disable */
        console.log(response);
        if (response.data.isToken) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isToken', response.data.isToken);
          commit('pushDataUserSession', response.data.payload);
          router.push({name: `profil`});
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    logout({commit}) {
      delete localStorage.isToken;
      delete localStorage.token;
      commit('deleteDataUserSession');
      router.push('home');
    }
  }
})

export default store;
