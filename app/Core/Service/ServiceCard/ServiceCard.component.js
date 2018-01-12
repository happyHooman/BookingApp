import template from './ServiceCard.template.html'

class ServiceCardController {
    constructor() {
        this.componentName = 'ServiceCardComponent';
    }

    $onInit() {
    }
}

const bindings = {
    serviceItem: '<'
}

export const serviceCardComponent = {
    controller: ServiceCardController,
    controllerAs: '$ctrl',
    template,
    bindings
}
