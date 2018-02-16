import template from './navbar.template.html'
import componentStyles from './navbar.scss'

class NavbarController {
	constructor() {
	}

	$onInit() {
		this.greeting = 'Welcome!'
	}
}

export const navbarComponent = {
	controller: NavbarController,
	controllerAs: '$ctrl',
	template,
}
