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

	editService(service) {
    this.location.path('/edit-service/'+ service.id);
	}

	$onInit() {

    this._http.get(ApiUrl.base + ApiUrl.services).then(res => {
			this.services = res.data;
			console.log("services loaded");
    }, err => {
      console.log('Error loading services. Please check server status. ', err);
    });
		this.isLoggedIn = localStorage.getItem('userEmail')? true: false;
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
