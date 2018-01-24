import template from './ServiceCard.template.html'
import componentStyle from './ServiceCard.scss'

class ServiceCardController {
    constructor() {
    }

    $onInit() {
  		this.loggedIn = localStorage.getItem('userEmail')? true: false;
      this.availability = this.serviceItem.workingHours.start + ':00 - '  +  this.serviceItem.workingHours.end + ':00';
    }
}

const bindings = {
    serviceItem: '<',
    deleteService: '&',
    editService: '&'
}

export const serviceCardComponent = {
    controller: ServiceCardController,
    controllerAs: '$ctrl',
    template,
    bindings
}
