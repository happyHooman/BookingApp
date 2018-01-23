import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.scss'
import {ApiUrl} from '../../../ApiUrl.constants'

class AdminRegisterController {
	constructor($http, $location) {
		this._http = $http
		this._location = $location
		this.user = {
			name: '',
			email: '',
			password: ''
		}
	}

	$onInit() {
	}

	createUser() {
		console.log(this.user);

		// create user
		this._http.post(ApiUrl.base + ApiUrl.users, this.user).then(() => {
			console.log("The user", this.user.name, "has been created.");
		});

		this.company = {
			email: this.user.email,
			name: '',
			description: '',
			logo: ''
		}
		// create associated company
		this._http.post(ApiUrl.base + ApiUrl.companies, this.company).then(() => {
			console.log("associated company has been created");
		})
	}
}



export const adminRegisterComponent = {
	controller: AdminRegisterController,
	controllerAs: '$ctrl',
	template
}
