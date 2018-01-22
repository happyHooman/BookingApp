import template from './ServiceList.template.html'
import { ApiUrl } from '../../../ApiUrl.constants';


class ServiceListController {
	constructor($location, $http) {
    this.location = $location;
    this._http = $http;
		this.componentName = 'ServiceListComponent';
		this.isLoggedIn = false;
		this.services = [];
	}

	deleteService(service) {
		if (confirm('Are you sure you want to delete this service?')) {
			this.services.splice(this.services.indexOf(service), 1);
			this._http.delete(ApiUrl.base + ApiUrl.services + service.id);
		}
	}

	goEditService(service) {
    this.location.path('/new-service');
    localStorage.setItem('service', JSON.stringify(service));

	}

	$onInit() {
    this._http.get(ApiUrl.base + ApiUrl.services).then(res => {
			this.services = res.data;
			console.log("services loaded");
    }, err => {
      console.log('Error loading services. Please check server status. ', err);
    });
  }
}

const bindings = {
	filter: '<'
}

export const serviceListComponent = {
	controller: ServiceListController,
	controllerAs: '$ctrl',
	template,
	bindings
}
