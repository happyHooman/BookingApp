import template from './register.template.html'
import componentStyles from './register.scss'
import RegisterService from './register.service'

class RegisterController {
	constructor(RegisterService) {
		this.registerService = RegisterService
	}

	createUser() {
		this.registerService.register(this.user)
	}
}

export const registerComponent = {
	controller: RegisterController,
	controllerAs: '$ctrl',
	template
}
