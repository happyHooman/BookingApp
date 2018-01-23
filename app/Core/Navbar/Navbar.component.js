import template from './Navbar.template.html'
import componentStyles from './Navbar.scss'

class NavbarController {
	constructor() {}

	$onInit() {
		if (localStorage.getItem('userInfo')) {
			this.greeting = "Welcome " + JSON.parse(localStorage.getItem('userInfo')).name;
		} else {
			this.greeting = "Welcome!"
		}
	}
}

export const navbarComponent = {
	controller: NavbarController,
	controllerAs: '$ctrl',
	template,
}
