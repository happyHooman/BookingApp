import template from './edit-service.template.html'
import {
	ApiUrl
} from '../../../ApiUrl.constants';

class EditServiceController {
	constructor($http, $location) {
		this._location = $location;
		this._http = $http;
		this.service = {};
	}
	$onInit() {
		this.service = JSON.parse(localStorage.getItem('service'));
		localStorage.removeItem('service');
	}
	saveService() {
		if (this.service.id) { //uptade the current service, wich has an id
			this._http.put(ApiUrl.base + ApiUrl.services + this.service.id, this.service)
				.then(() => this._location.path('/dashboard'));
		} else { //create a new service, it doesn't have an id. the json-server will automatically create it
			this._http.post(ApiUrl.base + ApiUrl.services, this.service)
				.then(() => this._location.path('/dashboard'));
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
