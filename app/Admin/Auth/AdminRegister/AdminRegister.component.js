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
		this._http.get(ApiUrl.base + ApiUrl.users).then(res => {
			this.allUsers = res.data;
		})
	}

	createUser() {

		if(this.allUsers.map(user=>user.email).find(email=>email===this.user.email)) {
			alert('email allready used')
    } else {
			// create user
			this._http.post(ApiUrl.base + ApiUrl.users, this.user).then(() => {
				console.log("The user", this.user.name, "has been created.");
			});

			this.company = {
				email: this.user.email,
				name: '',
				description: '',
				logo: '../Public/assets/logo.png',
				workingHours: {start: 0, end: 23},
				workingDays: [0,0,0,0,0,0,0]
			}
			// create associated company
			this._http.post(ApiUrl.base + ApiUrl.companies, this.company).then(() => {
				console.log("associated company has been created");
			})

			this._location.path('/login')
    }


	}
}



export const adminRegisterComponent = {
	controller: AdminRegisterController,
	controllerAs: '$ctrl',
	template
}
