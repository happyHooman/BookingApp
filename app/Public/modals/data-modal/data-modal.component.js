import template from './data-modal.template.html'

class DataModalController {
	constructor() {
		this.componentName = 'DataModalComponent'
	}
	onInit() {
    console.log("THIS IS SPART");
  }
}

export const dataModalComponent = {
	controller: DataModalController,
	controllerAs: '$ctrl',
	template
}
