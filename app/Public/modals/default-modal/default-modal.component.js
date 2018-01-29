import template from './default-modal.template.html'

class DefaultModalController {
	constructor() {
		this.step = 1;
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
