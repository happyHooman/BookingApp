import template from './booking-time-modal.template.html'

class BookingTimeModalController {
	constructor() {
		this.componentName = 'bookingTimeModalComponent'
	}
	$onInit() {
	}
}

export const bookingTimeModalComponent = {
	controller: BookingTimeModalController,
	controllerAs: '$ctrl',
	template
}
