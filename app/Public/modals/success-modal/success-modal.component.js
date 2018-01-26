import template from './success-modal.template.html'

class SuccessModalController {
	constructor() {
		this.date = {
			year: 2018,
			month: 0,
			day: 22,
			hour: 10
		}
	}

	generateDate() {
		return new Date(this.date.year, this.date.month, this.date.day, this.date.hour,
			0, 0, 0).valueOf();
	}

	$onInit() {
		let date = new Date();
		this.date.year = date.getFullYear();
		this.date.month = date.getMonth();
		this.date.day = date.getDate();
		this.date.hour = date.getHours();
	}
}

const bindings = {
	changeStep: '&'
}

export const successModalComponent = {
	controller: SuccessModalController,
	controllerAs: '$ctrl',
	bindings,
	template
}
