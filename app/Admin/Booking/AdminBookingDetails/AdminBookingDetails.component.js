import template from './AdminBookingDetails.template.html'
import componentStyles from './AdminBookingDetails.scss'

class AdminBookingDetailsController {
    constructor() {
        this.componentName = 'AdminBookingDetailsComponent';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminBookingDetailsComponent = {
    controller: AdminBookingDetailsController,
    controllerAs: '$ctrl',
    template,
    bindings
}
