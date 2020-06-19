import axios from "axios";

import store from '../store/index'

const api = axios.create({
	baseURL: "http://quiz-joyjet.herokuapp.com"
});

api.interceptors.request.use(async function (config) {
    const state = store.getState()

	if (state.user.token) {
		config.headers.Authorization = 'Bearer '+state.user.token;
	}
   
    return config;
})

export default api;