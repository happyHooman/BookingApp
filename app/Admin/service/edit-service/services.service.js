import { API } from '../../../api.url'

class ServicesService {
	constructor($http, $location, $routeParams) {
		this.$http = $http
		this.$location = $location
		this.$routeParams = $routeParams
	}

	addService(data) {
		const url = API.base + API.services
		this.$http.post(url, data).then(res => {
			console.log(res.data);
			this.$location.path('/dashboard')
		}, err => {
			console.log(err.data);
		})
	}

	loadService() {
		if (this.$routeParams.id) {
			const serviceId = this.$routeParams.id
			const url = API.base + API.services + '/' + serviceId
			return this.$http.get(url)
		} else {
			let service = this.initService()
			// because we call this loadService() function, and it has a '.then' function appended to manage the result
			// but in this situation we imediately have the result, and we can not return a promise
			// instead we return an object that has a 'then' key to wich is assigned a function,
			return {
				then: callback => callback({
					data: service
				})
			}
		}
	}

	initService() {
		let service = {}
		service.userId = localStorage.getItem('UID')
		service.duration = {}
		service.duration.hours = 0
		service.duration.minutes = 15
		return service
	}

	saveChanges(data) {
		const url = API.base + API.services
		this.$http.put(url, data).then(res => {
			// console.log(res.data);
			this.$location.path('/dashboard')
		}, err => {
			console.log(err.data);
		})
	}

	saveService(data) {
		if (this.$routeParams.id) {
			this.saveChanges(data)
		} else {
			this.addService(data)
		}

	}
}

export default ServicesService
