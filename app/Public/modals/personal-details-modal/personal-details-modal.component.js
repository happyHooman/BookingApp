import template from './personal-details-modal.template.html'

class PersonalDetailsModalController {
	constructor() {
		this.componentName = 'PersonalDetailsModalComponent'
	}
	$onInit() {}
}

export const personalDetailsModalComponent = {
	controller: PersonalDetailsModalController,
	controllerAs: '$ctrl',
	template
}
