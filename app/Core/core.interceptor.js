import { API } from '../api.url'


class CoreInterceptor {
	constructor() {

	}

	request(config) {
		if (checkConditions()) {
			config.headers = config.headers || {};
			config.headers.Authorization = localStorage.getItem('auth-token')
		}
		return config

		function checkConditions() {
			if (config.url.startsWith(API.base + API.services) && config.method === 'DELETE') {
				return true
			} else {
				return false
			}
		}
	}
}

export default CoreInterceptor
