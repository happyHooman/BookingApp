import {API} from '../../api.url'

class RedirectService {
	constructor($location, $http) {
		this.$location = $location
		this.$http = $http
	}

	checkToken(admin) {
		const url = API.base + API.me
		this.$http.get(url).then(
			res => {
				if (admin) {
					this.getIn()
				}
			},
			err => {
				if (err.status === 401) {
					localStorage.removeItem('auth-token')
					localStorage.removeItem('UID')
					if (!admin) {
						this.getOut()
					}
				}
			})
	}

	getOut() {
		this.$location.path('/')
	}

	getIn() {
		this.$location.path('/dashboard')
	}
}

export default RedirectService
