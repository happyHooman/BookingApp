import template from './register.template.html'
import componentStyles from './register.scss'
import { API } from '../../../api.url'

class RegisterController {
	constructor($http, $location) {
		this._http = $http
		this._location = $location
	}

	$onInit() {	}

	createUser() {
		const url = API.base + API.signup
		const data = this.user
		this._http.post(url, data).then(res => {
			alert(res.data)
			this._location.path('/login')
		}, err => {
			alert(err.data)
		})
	}
}

export const registerComponent = {
	controller: RegisterController,
	controllerAs: '$ctrl',
	template
}
