import template from './booking-time.template.html'

class BookingTimeController {
	constructor() {
	}
	$onInit() {

	}
}

const bindings = {
	availability: '<'
}

export const bookingTimeComponent = {
	controller: BookingTimeController,
	controllerAs: '$ctrl',
	bindings,
	template
}
