import template from './booking-time.template.html'

class BookingTimeController {
	constructor() {
	}
}

const bindings = {
	availability: '<'
}

export const bookingTimeComponent = {
	controller: BookingTimeController,
	bindings,
	template
}
