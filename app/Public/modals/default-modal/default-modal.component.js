import template from './default-modal.template.html'

class DefaultModalController {
	constructor() {
		this.step = 1;
	}

	onInit() {
	}
}

export const defaultModalComponent = {
	controller: DefaultModalController,
	controllerAs: '$ctrl',
	template
}
