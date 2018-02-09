import template from './day-picker.template.html'
import { API } from '../../api.url'

class DayPickerController {
	constructor($http, $scope) {
		this._http = $http;
		this.weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
	}

	$onInit() {
		this.loggedIn = localStorage.getItem('auth-token') ? true : false
		this.loadData()
	}

	loadData() {
		if (this.loggedIn) {
			const userId = localStorage.getItem('UID')
			const url = API.base + API.companies + '?userId=' + userId
			this._http.get(url).then(res => {
							this.workingHours = res.data.workingHours;
							this.workingDays = res.data.workingDays;
							this.setBookingTimes();
							if (!this.availability) {
								this.setAvailability()
							}
			}, err=>{
				console.log(err);
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
		}
	}

	resetBookingTimes(){
		this.setBookingTimes()
		this.setAvailability()
	}

	setAvailability() {
		let n = this.bookingTimes.length;
		this.availability = {}
		this.availability.times = this.bookingTimes;
		this.availability.slots = []
		for (var i = 0; i < n; i++) {
			this.availability.slots[i] = []
			for (var j = 0; j < 7; j++) {
				if (this.workingDays[j]) {
					this.availability.slots[i][j] = 1;
				} else {
					this.availability.slots[i][j] = 0;
				}
			}
		}
	}

	setAvailable(hour, day) {
		if (this.loggedIn) {
			if (this.availability.slots[hour][day]===0 || this.availability.slots[hour][day]===1) {
				this.availability.slots[hour][day] = this.availability.slots[hour][day]===1 ? 0 : 1
			} else if (this.availability.slots[hour][day] === 3 ) {
				console.log('are you shure you want to remove this booking?');
			}
		} else {
			if (this.availability.slots[hour][day]===1) {
				if (this.selected) {
					this.availability.slots[this.selected.h][this.selected.d]=1;
				}
				this.availability.slots[hour][day] = 2;
				this.selected = {
					h: hour,
					d: day
				}
			} else {
				console.log("can not click there");
			}
		}

	}

	setClasses(val){
		if (this.loggedIn) {
			switch (val) {
				case 0: return 'fa fa-circle-thin fa-2x'
				case 1: return 'fa fa-circle fa-2x clk'
				case 2: return 'fa fa-circle fa-2x bkd'
				case 3: return 'fa fa-circle fa-2x set'
			}
		} else {
			switch (val) {
				case 0: return 'fa fa-circle-thin fa-2x set'
				case 1: return 'fa fa-circle fa-2x clk'
				case 2: return 'fa fa-circle fa-2x bkd'
				case 3: return 'fa fa-circle fa-2x set'
			}
		}

	}
}

const bindings = {
	availability: '=?',
	duration: '<',
	selected: '=?'
}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	bindings,
	template
}
