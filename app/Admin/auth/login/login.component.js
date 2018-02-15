import template from './login.template.html'
import LoginService from './login.service'

class LoginController {
	constructor(LoginService) {
    this.loginService = LoginService
	}

	login(){
		this.loginService.login(this.credentials)
	}

}

export const loginComponent = {
	controller: LoginController,
	controllerAs: '$ctrl',
	template,
}
