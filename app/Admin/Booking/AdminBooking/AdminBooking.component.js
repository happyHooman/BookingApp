import template from './AdminBooking.template.html'
import componentStyles from './AdminBooking.scss'

class AdminBookingController {
    constructor() {
        this.componentName = 'AdminBookingComponent';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminBookingComponent = {
    controller: AdminBookingController,
    controllerAs: '$ctrl',
    template,
    bindings
}
