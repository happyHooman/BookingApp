import template from './AdminBookingList.template.html'
import componentStyles from './AdminBookingList.scss'

class AdminBookingListController {
    constructor() {
        this.componentName = 'AdminBookingListComponent';
        this.bookings = [{
                name: 'John Doe',
                email: 'john.doe@email.com',
                phone: '0789456123',
                time: 'Mon, 10:00-11:00',
                serviceName: 'Haircut'
            },
            {
                name: 'Vasily Zaytsev',
                email: 'v.z@email.ru',
                phone: '0929456123',
                time: 'Tue, 10:00-11:00',
                serviceName: 'Beard Trimming'
            },
            {
                name: 'John Doe',
                email: 'john.doe@email.com',
                phone: '0789456123',
                time:  new Date(2018,1,1,10),
                serviceName: 'Haircut'
            },
            {
                name: 'Vasily Zaytsev',
                email: 'v.z@email.ru',
                phone: '0929456123',
                time: 'Mon, 10:00-11:00',
                serviceName: 'Shoes Cleaning'
            },
            {
                name: 'John Doe',
                email: 'john.doe@email.com',
                phone: '0789456123',
                time: 'Wed, 10:00-11:00',
                serviceName: 'Nail Polish'
            },
            {
                name: 'Vasily Zaytsev',
                email: 'v.z@email.ru',
                phone: '0929456123',
                time: 'Fri, 10:00-11:00',
                serviceName: 'Beard Trimming'
            }
        ];
    }


            // SAVE ALL UNIQUE SERVICES IN THE SERVICES VARIABLE
    filterServices(){
      return this.bookings.map(x => x.serviceName).filter((x, pos, array) => array.indexOf(x) == pos);
    }

    $onInit() {
        this.services = this.filterServices();
    }
}

const bindings = {

}

export const adminBookingListComponent = {
    controller: AdminBookingListController,
    controllerAs: '$ctrl',
    template,
    bindings
}
