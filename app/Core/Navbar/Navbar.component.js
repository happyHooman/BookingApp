import template from './Navbar.template.html'
import componentStyles from './Navbar.scss'

class NavbarController {
	constructor() {
	}

	$onInit() {
		this.greeting = "Welcome " + JSON.parse(localStorage.getItem('userInfo')).name;
	}
}

export const navbarComponent = {
	controller: NavbarController,
	controllerAs: '$ctrl',
	template,
}
