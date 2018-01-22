import template from './edit-service.template.html'
import { ApiUrl } from '../../../ApiUrl.constants';

class EditServiceController {
	constructor($http, $location, $routeParams) {
		this._routeParamas = $routeParams;
		this._location = $location;
		this._http = $http;
		this.service = {};
	}

	$onInit() {
		this.loadService();
	}

	loadService() {
		if (this._routeParamas.id) {
			this._http.get(ApiUrl.base + ApiUrl.services + this._routeParamas.id).then(
				res => {
					this.service = res.data;
					console.log('service loaded');
				}, err => {
					console.log("error loading service", err);
				});
		} else {
			this.service = {
				availability: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0]
			]
			}
		}
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
	pageOptions: '<'
}

export const editServiceComponent = {
	controller: EditServiceController,
	controllerAs: '$ctrl',
	bindings,
	template
}
