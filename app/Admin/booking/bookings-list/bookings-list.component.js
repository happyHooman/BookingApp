import template from './bookings-list.template.html'
import componentStyles from './bookings-list.scss'
import BookingListService from './bookings-list.service'

class BookingListController {
	constructor(BookingListService) {
		this.orderProp = 'time';
		this.reverseOrder = false;
		this.loadService = BookingListService.loadBookings();
	}

	$onInit() {
		this.loadBookings()
	}

	$onDestroy(){
		this.bookings = []
	}

	loadBookings(){
		this.loadService.then(res => {
			this.bookings = res.data
			this.filterServices()
		})
	}

	// create services list
	filterServices() {
		this.services = this.bookings.map(x => x.serviceName).filter((x, pos, array) => array.indexOf(x) === pos)
	}

	sortBy(newProp) {
		this.reverseOrder = (this.orderProp === newProp) ? !this.reverseOrder : false
		this.orderProp = newProp
	}
}

export const bookingListComponent = {
	controller: BookingListController,
	controllerAs: '$ctrl',
	template
}
