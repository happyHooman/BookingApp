import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.scss'
import { ApiUrl } from '../../../ApiUrl.constants'

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

	verifyCompany() {
		let companyExists;
		let url = ApiUrl.base + ApiUrl.companies + '?email=' + this.company.email;
		this._http.get(url).then(res => {
			companyExists = res.data[0]
			if (companyExists) {
				alert('an user with this email allready exists. do you wish to log in?');
			} else {
				console.log('we will create the user soon');
				this.createCompany()
			}
		})
	}

	createCompany() {
		this.company.companyName = ''
		this.company.description = ''
		this.company.logo = '../Public/assets/logo.png'
		this.company.workingHours = {start: 0, end: 23}
		this.company.workingDays = [0, 0, 0, 0, 0, 0, 0]

		this._http.post(ApiUrl.base + ApiUrl.companies, this.company).then(() => {
			console.log("associated company has been created");
			this._location.path('/login')
		})
	}

}


export const adminRegisterComponent = {
	controller: AdminRegisterController,
	controllerAs: '$ctrl',
	template
}
