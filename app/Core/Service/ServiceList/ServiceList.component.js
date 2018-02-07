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
			const companyId = JSON.parse(localStorage.getItem('userInfo')).id
			const url = ApiUrl.base + ApiUrl.services + '?companyId=' + companyId
			this.loadServices(url)
		} else if (this._routeParams.id) {
			const url = ApiUrl.base + ApiUrl.services + '?companyId=' + this._routeParams.id
			this.loadServices(url)
		} else {
			const url = ApiUrl.base + ApiUrl.services
			this.loadServices(url)
		}
	}

	loadServices(url){
		this._http.get(url).then(res=>{
			this.services = res.data
		}, err => {
			console.log('errror loading services', err);
		})
	}


	deleteService(id) {
		if (confirm('Are you sure you want to delete this service?')) {
			this.services.splice(this.services.indexOf(id), 1);
			this._http.delete(ApiUrl.base + ApiUrl.services + id);
		}
	}

	editService(id) {
		this.location.path('/edit-service/' + id);
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
