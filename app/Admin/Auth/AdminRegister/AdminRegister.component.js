import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.scss'
import { API } from '../../../api.url'

class AdminRegisterController {
	constructor($http, $location) {
		this._http = $http
		this._location = $location
	}

	$onInit() {

	}

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

export const adminRegisterComponent = {
	controller: AdminRegisterController,
	controllerAs: '$ctrl',
	template
}
