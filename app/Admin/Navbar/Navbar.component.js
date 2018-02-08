import template from './Navbar.template.html'
import componentStyles from './Navbar.scss'

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
