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
    // this._http.get(ApiUrl.base + ApiUrl.users).then(res=>{
    //   this.allUsers = res.data;
    // })
  }

	login() {
		//check the enetered email and password in all users array
		let verifyUser = this.allUsers.find(user=>user.email === this.user.email)
    if(verifyUser){
      if(verifyUser.password === this.user.password){
				this.user = { name: verifyUser.name, email: verifyUser.email, id: verifyUser.id}
				localStorage.setItem('userInfo', JSON.stringify(this.user))
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
