import template from './ServiceList.template.html'
import {API} from '../../../api.url';

class ServiceListController {
	constructor($location, $http, $routeParams) {
		this.location = $location;
		this._http = $http;
		this._routeParams = $routeParams;
		this.services = [];
	}

	$onInit() {
		this.isLoggedIn = localStorage.getItem('auth-token') ? true : false
		this.selectServices()
	}

	selectServices() {
		if (this.isLoggedIn) {
			const userId = localStorage.getItem('UID')
			const url = API.base + API.services + '?userId=' + userId
			this.loadServices(url)
		} else if (this._routeParams.id) {
			const url = API.base + API.services + '?userId=' + this._routeParams.id
			this.loadServices(url)
		} else {
			const url = API.base + API.services
			this.loadServices(url)
		}
	}

	loadServices(url) {
		this._http.get(url).then(res => {
			this.services = res.data
		}, err => {
			console.log('errror loading services', err);
		})
	}


	deleteService(id) {
		if (confirm('Are you sure you want to delete this service?')) {
			this.services.splice(this.services.indexOf(this.services.find(srv => srv._id ===id)), 1); //remove from view without page reloading

			const url = API.base + API.services + '?id=' + id
			const token = localStorage.getItem('auth-token')
			this._http({
				method: 'DELETE',
				headers: {'Authorization': token},
				url
			}).then(res => {
				console.log(res.data);
			}, err => {
				console.log(err.data);
			})
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
