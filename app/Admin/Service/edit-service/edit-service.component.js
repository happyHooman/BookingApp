import template from './edit-service.template.html'
import { ApiUrl } from '../../../ApiUrl.constants'
class EditServiceController {
	constructor($http, $location, $routeParams) {
		this._routeParams = $routeParams;
		this._location = $location;
		this._http = $http;
		this.service = {};
	}

	$onInit() {
		this.loadService();
	}

	loadService() {
		let company = {};
		if (this._routeParams.id) {
			this._http.get(ApiUrl.base + ApiUrl.services + this._routeParams.id).then(
				res => {
					this.service = res.data;
					console.log('service loaded');
				}, err => {
					console.log("error loading service", err);
				});
		} else {
			this.service.availability = [
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0],
				[0, 0, 0, 0,0,0,0]
			]
			this._http.get(ApiUrl.base + ApiUrl.companies + JSON.parse(localStorage.getItem('userInfo')).id)
				.then(res => {
					this.company = res.data;
					this.service.workingHours = this.company.workingHours;
					this.service.logo = this.company.logo;
					this.service.company = this.company.name;
					console.log(this.service);
				}, err=>{
					console.log("error loading company",err);
				})

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
