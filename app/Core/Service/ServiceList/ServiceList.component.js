import template from './ServiceList.template.html'
import { ApiUrl } from '../../../ApiUrl.constants';

class ServiceListController {
	constructor($location, $http, $routeParams) {
		this.location = $location;
		this._http = $http;
		this._routeParams = $routeParams;
		this.componentName = 'ServiceListComponent';
		this.isLoggedIn = false;
		this.services = [];
	}

	$onInit() {
		this.loadServices()
		this.setDisplayFilter()
	}

	loadServices(){
		this._http.get(ApiUrl.base + ApiUrl.services).then(res => {
			this.services = res.data;
			console.log("services loaded");
		}, err => {
			console.log('Error loading services. Please check server status. ', err);
		});
	}

	setDisplayFilter(){
		// if user is logged in
		if(localStorage.getItem('userInfo')){
			this.filter = JSON.parse(localStorage.getItem('userInfo')).id
		}

		// if company profile is viewed by visitor
		if(this._routeParams.id){
			this.filter = this._routeParams.id;
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

const bindings = {
	filter: '<'
}

export const serviceListComponent = {
	controller: ServiceListController,
	controllerAs: '$ctrl',
	bindings,
	template
}
