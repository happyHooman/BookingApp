import template from './day-picker.template.html'
import { ApiUrl } from '../../ApiUrl.constants'

class DayPickerController {
	constructor($http) {
		this._http = $http;
		this.weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
		this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
			18, 19, 20, 21, 22, 23];
	}

	$onInit() {
		// if user is signed in it can edit available working hours
		if(localStorage.getItem('userInfo')){
			this._http.get(ApiUrl.base + ApiUrl.companies + JSON.parse(localStorage.getItem('userInfo')).id)
				.then(res => {
					this.company = res.data;
					this.workingHours = this.company.workingHours;
					this.length = this.workingHours.end - this.workingHours.start;
				}, err=>{
					console.log("error loading company",err);
				})
		}

	}

	setAvailable(hour, day) {
		this.availability[hour + this.workingHours.start][day] = this.availability[hour + this.workingHours.start][day]? 0: 1;
		console.log(this.weekdays[day], 'at', hour + this.workingHours.start);
	}
}

const bindings = {
	availability: '='
}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	bindings,
	template
}
