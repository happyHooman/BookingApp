import template from './default-modal.template.html'

class DefaultModalController {
	constructor() {
		this.componentName = 'DefaultModalComponent';
		this.step = 2;
	}
	changeStep(value) {
		this.step += value;
	}

	onInit() {}
}

export const defaultModalComponent = {
	controller: DefaultModalController,
	controllerAs: '$ctrl',
	template
}
