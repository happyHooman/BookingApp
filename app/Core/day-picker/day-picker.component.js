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
		this.loadData()
	}

	loadData() {
		if (localStorage.getItem('userInfo')) {
			this._http.get(ApiUrl.base + ApiUrl.companies + JSON.parse(localStorage.getItem(
					'userInfo')).id)
				.then(res => {
					let company = res.data;
					this.workingHours = company.workingHours;
					this.workingDays = company.workingDays;
					this.length = this.workingHours.end - this.workingHours.start;
					this.setDays()
					if (this.availability) {
						console.log("loaded company availability");
					} else {
						this.setAvailability()
						console.log("created availability");
					}
				}, err => {
					console.log("error loading company", err);
				})
		}
	}

	setAvailability() {
		let n = this.workingHours.end - this.workingHours.start;
		let m = this.weekdays.length

		this.availability = []
		for (var i = 0; i < n; i++) {
			this.availability[i] = []
			for (var j = 0; j < m; j++) {
				this.availability[i][j] = 1;
			}
		}
	}

	setDays() {
		this.weekdays = this.weekdays.filter((day, id) => {
			if (this.workingDays[id]) {
				return day
			}
		})
	}

	setAvailable(hour, day) {
		this.availability[hour][day] = this.availability[hour][day] ? 0 : 1;
		console.log(this.weekdays[day], 'at', hour + this.workingHours.start);
	}
}

const bindings = {
	availability: '<'
}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	bindings,
	template
}
