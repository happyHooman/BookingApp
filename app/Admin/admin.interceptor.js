import { API } from '../api.url'

class AdminInterceptor {
	constructor() {

	}

	request(config) {
		if (checkConditions()) {
			config.headers = config.headers || {};
			config.headers.Authorization = localStorage.getItem('auth-token')
		}
		return config

		function checkConditions() {
			if (config.url === API.base + API.bookings) {
				return true
			} else if (config.url === API.base + API.companies && config.method ===
				'PUT') {
				return true
			} else if (config.url === API.base + API.services && config.method ===
				'POST') {
				return true
			} else if (config.url === API.base + API.services && config.method ===
				'PUT') {
				return true
			} else {
				return false
			}
		}
	}

}

export default AdminInterceptor;
