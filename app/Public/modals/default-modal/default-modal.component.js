import template from './default-modal.template.html'

class DefaultModalController {
	constructor() {
		this.step = 2;
		this.personalDetails = {
			name: '',
			email: '',
			phone: ''
		}
	}

	$onInit() {
	}
}

const bindings = {
	service: '<'
}

export const defaultModalComponent = {
	controller: DefaultModalController,
	controllerAs: '$ctrl',
	bindings,
	template
}
