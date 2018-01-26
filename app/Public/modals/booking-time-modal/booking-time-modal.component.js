import template from './booking-time-modal.template.html'

class BookingTimeModalController {
	constructor() {
		this.componentName = 'bookingTimeModalComponent'
	}
	$onInit() {
	}
}

const bindings = {
	changeStep: '&'
}

export const bookingTimeModalComponent = {
	controller: BookingTimeModalController,
	controllerAs: '$ctrl',
	bindings,
	template
}
