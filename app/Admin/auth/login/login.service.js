import {API} from '../../../api.url'

class LoginService {
	constructor($http, $location) {
		this.$http = $http
    this.$location = $location
	}
	login(data) {
		const url = API.base + API.signin
		this.$http.post(url, data)
			.then(res => {
        localStorage.setItem('auth-token',res.data.token)
  			localStorage.setItem('UID',res.data.uid)
    		this.$location.path('/dashboard')
			}, err => {
				console.log(err.data)
        alert('Wrong username or password!')
			})
	}
}

export default LoginService
