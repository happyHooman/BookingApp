import template from './day-picker.template.html'
import { ApiUrl } from '../../ApiUrl.constants'

class DayPickerController {
	constructor($http, $scope) {
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
					this.setBookingTimes();
					this.length = this.workingHours.end - this.workingHours.start;
					if (!this.availability) {
						this.setAvailability()
					}
				}, err => {
					console.log("error loading company", err);
				})
		}
	}

	setBookingTimes(){
		if (this.duration<900000) {
			alert("Service should last at least 15 minutes")
		} else {
			let start = new Date(2010,0,1,this.workingHours.start).valueOf();
			let finish = new Date(2010,0,1,this.workingHours.end).valueOf();
			let i = 1;
			this.bookingTimes = [];

			this.bookingTimes[0] = start
			while(this.bookingTimes[i-1] + this.duration < finish){
				this.bookingTimes[i] = this.bookingTimes[i-1] + this.duration;
				i++;
			}
			this.setAvailability()
		}
	}

	setAvailability() {
		let n = this.bookingTimes.length;
		console.log(n);
		this.availability = []
		for (var i = 0; i < n; i++) {
			this.availability[i] = []
			for (var j = 0; j < 7; j++) {
				if (this.workingDays[j]) {
					this.availability[i][j] = 1;
				} else {
					this.availability[i][j] = 0;
				}
			}
		}
	}

	setAvailable(hour, day) {
		this.availability[hour][day] = this.availability[hour][day] ? 0 : 1;
		console.log(this.weekdays[day], 'at', hour + this.workingHours.start);
	}
}

const bindings = {
	availability: '=?',
	duration: '<'
}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	bindings,
	template
}
