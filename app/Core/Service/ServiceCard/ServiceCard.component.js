import template from './ServiceCard.template.html'
import componentStyle from './ServiceCard.scss'
import { API } from '../../../api.url'

class ServiceCardController {
	constructor($http) {
		this._http = $http;
	}

	$onInit() {
		this.loggedIn = localStorage.getItem('auth-token') ? true : false
		this.loadCompanyDetails()
		this.stringifyDuration()
	}

	loadCompanyDetails() {
		const url = API.base + API.companies
		const userId = localStorage.getItem('UID')
		this._http({
			method: 'GET',
			params: {userId},
			url
		}).then(res => {
			this.service.logo = res.data.logo;
			this.service.workingHours = res.data.workingHours;
			this.service.company = res.data.name;
			this.availability = res.data.workingHours.start + ':00 - ' + res.data.workingHours.end + ':00';
		}, err=>{
			console.log('Could not load company details',err);
		})
	}

	stringifyDuration() {
		if (this.service.duration.hours === 0) {
			this.duration = this.service.duration.minutes + ' min';
		} else {
			if (this.service.duration.minutes === 0) {
				this.duration = this.service.duration.hours + ' h';
			} else {
				this.duration = this.service.duration.hours + ' h, ' + this.service.duration
					.minutes + ' min';
			}
		}
	}

	bookService() {
		console.log(this.service);
	}

}

const bindings = {
	service: '<'
}

export const serviceCardComponent = {
	controller: ServiceCardController,
	controllerAs: '$ctrl',
	template,
	bindings
}
