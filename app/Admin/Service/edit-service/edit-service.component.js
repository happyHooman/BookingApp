import template from './edit-service.template.html'
import { ApiUrl } from '../../../ApiUrl.constants';

class EditServiceController {
	constructor($http) {
		this._http = $http;
		this.service = {};
	}
	$onInit() {
		this.service = JSON.parse(localStorage.getItem('service'));
		localStorage.removeItem('service');
	}
	saveService() {
		if (this.service.id) {
      console.log('ifff');
			this._http.put(ApiUrl.base + ApiUrl.services + this.service.id, this.service);
		} else {
      console.log('else')
			this._http.post(ApiUrl.base + ApiUrl.services, this.service);
		}
	}
}

const bindings = {
	service: '<'
}


export const editServiceComponent = {
	controller: EditServiceController,
	controllerAs: '$ctrl',
	template
}
