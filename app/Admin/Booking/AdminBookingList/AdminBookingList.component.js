import template from './AdminBookingList.template.html'
import componentStyles from './AdminBookingList.scss'
import { ApiUrl } from '../../../ApiUrl.constants'

class AdminBookingListController {
	constructor($http) {
		this._http = $http;
		this.componentName = 'AdminBookingListComponent';
		this.bookings = [];
	}


	// SAVE ALL UNIQUE SERVICES IN THE SERVICES VARIABLE
	filterServices() {
		this.services = this.bookings.map(x => x.serviceName).filter((x, pos, array) => array
			.indexOf(x) == pos);
	}

	$onInit() {
		this._http.get(ApiUrl.base + ApiUrl.bookings).then(res => {
      this.bookings = res.data;
      console.log("bookings loaded");
      this.filterServices();
    }, err => {
        console.log('Error loading bookings. Please check server status. ', err);
    })
	}
}


export const adminBookingListComponent = {
	controller: AdminBookingListController,
	controllerAs: '$ctrl',
	template
}
