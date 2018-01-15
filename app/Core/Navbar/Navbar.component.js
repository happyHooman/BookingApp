import template from './Navbar.template.html'
import componentStyles from './Navbar.scss'

class NavbarController {
    constructor() {
        this.componentName = 'navbarComponent';
    }

    $onInit() {
    }
}

export const navbarComponent = {
    controller: NavbarController,
    controllerAs: '$ctrl',
    template,
}
