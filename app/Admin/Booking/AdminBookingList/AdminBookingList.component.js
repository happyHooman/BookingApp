import template from './AdminBookingList.template.html'
import componentStyles from './AdminBookingList.scss'

class AdminBookingListController {
    constructor() {
        this.componentName = 'AdminBookingListComponent';
        this.bookings = [
            {
                name: 'John Doe',
                email: 'john.doe@email.com',
                phone: '0789456123',
                time: '10:00-11:00',
                serviceName: 'Haircut'
            },
            {
                name: 'Vasily Zaytsev',
                email: 'v.z@email.ru',
                phone: '0929456123',
                time: '10:00-11:00',
                serviceName: 'Beard Trimming'
            }
        ]
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
