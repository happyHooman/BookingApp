import template from './ServiceCard.template.html'
import componentStyle from './ServiceCard.scss'

class ServiceCardController {
    constructor() {

        this.componentName = 'ServiceCardComponent';
    }

    $onInit() {
    }
}

const bindings = {
    serviceItem: '<',
    loggedIn: '<'
}

export const serviceCardComponent = {
    controller: ServiceCardController,
    controllerAs: '$ctrl',
    template,
    bindings
}
