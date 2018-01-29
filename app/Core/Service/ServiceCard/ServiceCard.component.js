import template from './ServiceCard.template.html'
import componentStyle from './ServiceCard.scss'
import {
	ApiUrl
} from '../../../ApiUrl.constants'

class ServiceCardController {
	constructor($http) {
		this._http = $http;
	}

	$onInit() {
		this.loggedIn = localStorage.getItem('userEmail') ? true : false;
		this.loadCompanyDetails()
		this.stringifyDuration()
	}

	loadCompanyDetails() {
		this._http.get(ApiUrl.base + ApiUrl.companies + this.service.companyId).then(
			res => {
				let company = res.data;
				this.service.logo = company.logo;
				this.service.workingHours = company.workingHours;
				this.service.company = company.name;
				this.availability = company.workingHours.start + ':00 - ' + company.workingHours.end + ':00';
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
	service: '<',
	deleteService: '&',
	editService: '&'
}

export const serviceCardComponent = {
	controller: ServiceCardController,
	controllerAs: '$ctrl',
	template,
	bindings
}
