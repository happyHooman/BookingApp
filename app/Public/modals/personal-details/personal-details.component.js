import template from './personal-details.template.html'

class PersonalDetailsController {
	constructor() {
	}
}

const bindings = {
	 personalDetails: '='
}

export const personalDetailsComponent = {
	controller: PersonalDetailsController,
	bindings,
	template
}
