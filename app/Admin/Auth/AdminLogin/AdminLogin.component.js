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
    this._http.get(ApiUrl.base + ApiUrl.users).then(res=>{
      this.allUsers = res.data;
      console.log(this.allUsers);
    })
  }

	login() {
		console.log('you requested to log in to', this.user.email, this.user.password);
    if(this.allUsers.map(user=>user.email).find(email=>email===this.user.email)){
      console.log('good! now you can continue your journey');
      if(this.allUsers.map(user=>user.password).find(password=>password===this.user.password)){
        localStorage.setItem('userEmail', this.user.email);
        this._location.path('/dashboard')
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
