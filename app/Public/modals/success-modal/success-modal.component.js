import template from './success-modal.template.html'

class SuccessModalController {
	constructor() {
    this.date = {
      year: 2018,
      month: 0,
      day: 22,
      hour: 10
    }
		this.result = Date.now();
	}

	generateDate() {
    this.result = new Date(this.date.year, this.date.month, this.date.day, this.date.hour, 0, 0, 0).valueOf();
	}

	$onInit() {

	}
}

export const successModalComponent = {
	controller: SuccessModalController,
	controllerAs: '$ctrl',
	template
}
