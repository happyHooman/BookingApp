import template from './serviceList.template.html'
import ServiceListService from './serviceList.service'

class ServiceListController {
	constructor($location, ServiceListService) {
		this.$location = $location
		this.serviceListService = ServiceListService
	}

	$onInit() {
		this.loadServices()
	}

	loadServices() {
		this.serviceListService.loadServices().then(res=>{
			this.services = res.data;
		}, err =>{
			this.services = []
			console.log(err.data);
		})
	}

	deleteService(id) {
		if (confirm('Are you sure you want to delete this service?')) {
			this.services.splice(this.services.indexOf(this.services.find(srv => srv._id ===id)), 1); //remove from view without reloading page
			this.serviceListService.deleteService(id)
		}
	}

	editService(id) {
		this.$location.path('/edit-service/' + id)
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
