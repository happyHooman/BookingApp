import template from './AdminRecover.template.html'
import componentStyles from './AdminRecover.scss'

class AdminRecoverController {
    constructor() {
        this.componentName = 'adminRecoverComponent';
    }

    $onInit() {
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminRecoverComponent = {
    controller: AdminRecoverController,
    controllerAs: '$ctrl',
    template,
    bindings
}
