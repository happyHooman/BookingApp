import template from './Navbar.template.html'

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
