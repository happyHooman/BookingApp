import template from './booking-time-modal.template.html'

class BookingTimeModalController {
	constructor() {
		this.componentName = 'bookingTimeModalComponent'
	}
	$onInit() {

	}
}

const bindings = {
	availability: '<'
}

export const bookingTimeModalComponent = {
	controller: BookingTimeModalController,
	controllerAs: '$ctrl',
	bindings,
	template
}
