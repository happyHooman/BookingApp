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

	$onInit() {

		// load services list
		this._http.get(ApiUrl.base + ApiUrl.services).then(res => {
			this.services = res.data;
			console.log("services loaded");
		}, err => {
			console.log('Error loading services. Please check server status. ', err);
		});

		// define services display filter
		if(localStorage.getItem('userInfo')){
			//this case means user is logged in, we need to display only this user's services
			this.filterVal = JSON.parse(localStorage.getItem('userInfo')).id
			console.log(this.filterVal);
		}

	}

	deleteService(service) {
		if (confirm('Are you sure you want to delete this service?')) {
			this.services.splice(this.services.indexOf(service), 1);
			this._http.delete(ApiUrl.base + ApiUrl.services + service.id);
		}
	}

	editService(service) {
		this.location.path('/edit-service/' + service.id);
	}
}


export const serviceListComponent = {
	controller: ServiceListController,
	controllerAs: '$ctrl',
	template
}
