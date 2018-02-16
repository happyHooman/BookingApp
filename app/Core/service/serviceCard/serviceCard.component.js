import template from './serviceCard.template.html'
import componentStyle from './serviceCard.scss'
import { API } from '../../../api.url'
import ServiceCardService from './serviceCard.service'

class ServiceCardController {
	constructor(ServiceCardService) {
		this.serviceCardService = ServiceCardService
	}

	$onInit() {
		this.loggedIn = localStorage.getItem('auth-token') ? true : false
		this.companyProfile = this.serviceCardService.isCompanyProfile()
		// this.loadCompanyDetails()
		this.stringifyDuration()
	}

	loadCompanyDetails() {
		const userId = this.service.userId
		this.serviceCardService.loadCompanyDetails(userId).then(res => {
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
	template,
	bindings
}
