import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'
import { ApiUrl } from '../../../ApiUrl.constants'

class AdminLoginController {
	constructor($http, $location) {
    this._http = $http;
    this._location = $location;
		this.componentName = 'adminLoginComponent';
	}

	$onInit() {  }

	verifyCompany() {
		let url = ApiUrl.base + ApiUrl.companies + '?email=' + this.credentials.email
		let companyExists
		this._http.get(url).then(res=>{
			companyExists = res.data[0]
			if (companyExists) {
				if (companyExists.password === this.credentials.password) {
					this.login(companyExists)
				} else {
					alert('wrong password');
				}
			} else {
				alert('This user does not exist')
			}
		})
	}

	login(company){
		let credentials = {
			id: company.id,
			email: company.email,
			name: company.name
		}
		localStorage.setItem('userInfo', JSON.stringify(credentials))
		this._location.path('/dashboard')
	}

}

export const adminLoginComponent = {
	controller: AdminLoginController,
	controllerAs: '$ctrl',
	template,
}
