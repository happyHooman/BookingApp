import template from './personal-details-modal.template.html'

class PersonalDetailsModalController {
	constructor() {
	}
	$onInit() {}
}

const bindings = {
	 changeStep: '&',
	 personalDetails: '='
}

export const personalDetailsModalComponent = {
	controller: PersonalDetailsModalController,
	controllerAs: '$ctrl',
	bindings,
	template
}
