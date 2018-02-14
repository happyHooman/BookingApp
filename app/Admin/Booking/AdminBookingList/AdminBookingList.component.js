import template from './AdminBookingList.template.html'
import componentStyles from './AdminBookingList.scss'
import { API } from '../../../api.url'

class AdminBookingListController {
	constructor($http) {
		this.orderProp = 'time';
		this.reverseOrder = false;
		this._http = $http;
	}

	$onInit() {
		this.loadBookings()
	}

	loadBookings(){
		const url = API.base + API.bookings
		const token = localStorage.getItem('auth-token')
		this._http({
			method: 'GET',
			headers: {'Authorization':token},
			url
		}).then(res => {
			this.bookings = res.data;
			this.filterServices();
		}, err => {
			console.log('Error loading bookings. Please check server status. ', err);
		})
	}

	// create services list
	filterServices() {
		this.services = this.bookings.map(x => x.serviceName).filter((x, pos, array) => array.indexOf(x) == pos);
	}

	sortBy(newProp) {
		this.reverseOrder = (this.orderProp === newProp) ? !this.reverseOrder : false;
		this.orderProp = newProp;
	}


}

export const adminBookingListComponent = {
	controller: AdminBookingListController,
	controllerAs: '$ctrl',
	template
}
