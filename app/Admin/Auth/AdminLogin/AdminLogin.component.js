import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'
import {ApiUrl} from '../../../ApiUrl.constants'

class AdminLoginController {
	constructor($http, $location) {
    this._http = $http;
    this._location = $location;
		this.componentName = 'adminLoginComponent';
	}

	$onInit() {

		//load all users because no normal api is available
    this._http.get(ApiUrl.base + ApiUrl.users).then(res=>{
      this.allUsers = res.data;
    })
  }

	login() {


		//check the enetered email and password in all users array
    if(this.allUsers.map(user=>user.email).find(email=>email===this.user.email)){
      if(this.allUsers.map(user=>user.password).find(password=>password===this.user.password)){
        localStorage.setItem('userEmail', this.user.email);
        this._location.path('#/dashboard')
      } else{
        console.log('wrong password');
      }
    } else {
      console.log('sorry! the email is not found');
    }
	}
}

export const adminLoginComponent = {
	controller: AdminLoginController,
	controllerAs: '$ctrl',
	template,
}
