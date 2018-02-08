import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'
import { API } from '../../../api.url'

class AdminLoginController {
	constructor($http, $location) {
    this._http = $http;
    this._location = $location;
		this.componentName = 'adminLoginComponent';
	}

	$onInit() {  }

	login(company){
		const url = API.base + API.signin
		const data = this.credentials
		this._http.post(url,data).then(res=>{
			localStorage.setItem('auth-token',res.data.token)
			localStorage.setItem('UID',res.data.uid)
			this._location.path('/dashboard')
		},err=>{
			console.log(err.data);
			alert('Wrong username or password!');
		})
	}

}

export const adminLoginComponent = {
	controller: AdminLoginController,
	controllerAs: '$ctrl',
	template,
}
