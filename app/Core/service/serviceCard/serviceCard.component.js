import template from './serviceCard.template.html'
import componentStyle from './serviceCard.scss'

class ServiceCardController {
	constructor($routeParams) {
		this.$routeParams = $routeParams
	}

	$onInit() {
		this.loggedIn = localStorage.getItem('auth-token') ? true : false
		this.companyProfile = this.isCompanyProfile()
		this.stringifyDuration()
	}

	isCompanyProfile(){
    return this.$routeParams.id ? true : false
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
