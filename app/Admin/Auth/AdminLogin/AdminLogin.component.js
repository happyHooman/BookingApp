import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'

class AdminLoginController {
    constructor() {
        this.componentName = 'adminLoginComponent';
    }

    $onInit() {
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminLoginComponent = {
    controller: AdminLoginController,
    controllerAs: '$ctrl',
    template,
    bindings
}
