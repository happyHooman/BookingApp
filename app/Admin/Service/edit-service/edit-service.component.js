import template from './edit-service.template.html'
import { ApiUrl } from '../../../ApiUrl.constants'

class EditServiceController {
	constructor($http, $location, $routeParams) {
		this._routeParams = $routeParams;
		this._location = $location;
		this._http = $http;
		this.service = {};
		this.hourOptions = [
			{
				name: '0 hours',
				value: 0
			},{
				name: '1 hour',
				value: 1
			},{
				name: '2 hours',
				value: 2
			},{
				name: '3 hours',
				value: 3
			},{
				name: '4 hours',
				value: 4
			},{
				name: '5 hours',
				value: 5
			},{
				name: '6 hours',
				value: 6
			},{
				name: '7 hours',
				value: 7
			},{
				name: '8 hours',
				value: 8
			}
		];
		this.minuteOptions = [
			{
				name: '00 minutes',
				value: 0
			},{
				name: '05 minutes',
				value: 5
			},{
				name: '10 minutes',
				value: 10
			},{
				name: '15 minutes',
				value: 15
			},{
				name: '20 minutes',
				value: 20
			},{
				name: '25 minutes',
				value: 25
			},{
				name: '30 minutes',
				value: 30
			},{
				name: '35 minutes',
				value: 35
			},{
				name: '40 minutes',
				value: 40
			},{
				name: '45 minutes',
				value: 45
			},{
				name: '50 minutes',
				value: 50
			},{
				name: '55 minutes',
				value: 55
			}
		];
	}

	$onInit() {
		this.loadService();
	}

	loadService() {
		if (this._routeParams.id) {
			this._http.get(ApiUrl.base + ApiUrl.services + this._routeParams.id).then(
				res => {
					this.service = res.data;
					this.setDurationValue();
					console.log('service loaded');
				}, err => {
					console.log("error loading service", err);
				});
		} else {
			this.service.duration = {hours: 1, minutes: 0}
			this.setDurationValue();
		}
	}

	setDurationValue(){
		this.dur = (this.service.duration.hours*60 + this.service.duration.minutes) * 60000;
	}

	saveService() {
		if (this.service.id) { //uptade the current service
			this._http.put(ApiUrl.base + ApiUrl.services + this.service.id, this.service)
				.then(() => this._location.path('/dashboard'));
		} else { //create a new service
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
