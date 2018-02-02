import template from './personal-details.template.html'

class PersonalDetailsController {
	constructor() {
	}
	$onInit() {}
}

const bindings = {
	 personalDetails: '='
}

export const personalDetailsComponent = {
	controller: PersonalDetailsController,
	controllerAs: '$ctrl',
	bindings,
	template
}
