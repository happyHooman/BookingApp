import template from './ServiceList.template.html'
import { ApiUrl } from '../../../ApiUrl.constants';

class ServiceListController {
	constructor($location, $http, $routeParams) {
		this.location = $location;
		this._http = $http;
		this._routeParams = $routeParams;
		this.isLoggedIn = false;
		this.services = [];
	}

	$onInit() {
		this.checkLoggedIn()
		this.selectServices()
	}

	checkLoggedIn(){
		if(localStorage.getItem('userInfo')){
			this.isLoggedIn = true
		}
	}

	selectServices(){
		if (this.isLoggedIn) {
			let companyId = JSON.parse(localStorage.getItem('userInfo')).id
			let url = ApiUrl.base + ApiUrl.services + '?companyId=' + companyId
			this._http.get(url).then(res=>{
				this.services = res.data
			})
		} else if (this._routeParams.id) {
			let url = ApiUrl.base + ApiUrl.services + '?companyId=' + this._routeParams.id
			this._http.get(url).then(res=>{
				this.services = res.data
			})
		} else {
			let url = ApiUrl.base + ApiUrl.services
			this._http.get(url).then(res=>{
				this.services = res.data
			})
		}
	}

	loadServices(url){
		this._http.get(url).then(res=>{
			this.services = res.data
		}, err => {
			console.log('errror loadin services', err);
		})
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
