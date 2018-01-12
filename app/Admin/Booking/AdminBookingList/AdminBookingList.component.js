import template from './AdminBookingList.template.html'
import componentStyles from './AdminBookingList.scss'

class AdminBookingListController {
    constructor() {
        this.componentName = 'AdminBookingListComponent';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminBookingListComponent = {
    controller: AdminBookingListController,
    controllerAs: '$ctrl',
    template,
    bindings
}
