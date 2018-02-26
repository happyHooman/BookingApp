import template from './day-picker.template.html'
import componentStyle from './day-picker.style.scss'
import DayPickerService from './day-picker.service'

class DayPickerController {
	constructor(DayPickerService) {
		this.dayPickerService = DayPickerService
		this.weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
	}

	$onInit() {
		this.loggedIn = localStorage.getItem('auth-token') ? true : false
		this.loadData()
		this.newAvailability = {}
		setTimeout(() => {
			this.newAvailability[this.monday] = this.availability
		},300)
		console.log(this);
	}

	loadData() {
		if (this.loggedIn) {
			this.dayPickerService.loadData().then(res => {
				this.workingHours = res.data.workingHours
				this.workingDays = res.data.workingDays
				this.setBookingTimes()
				if (!this.availability) {
					this.setAvailability()
				}
			}, err => {
				console.log(err);
			})
		}
	}

	setBookingTimes() {
		if (this.duration < 900000) {
			alert("Service should last at least 15 minutes")
		} else {
			let start = new Date(2010, 0, 1, this.workingHours.start).valueOf();
			let finish = new Date(2010, 0, 1, this.workingHours.end).valueOf();
			let i = 1;
			this.bookingTimes = [];

			this.bookingTimes[0] = start
			while (this.bookingTimes[i - 1] + this.duration < finish) {
				this.bookingTimes[i] = this.bookingTimes[i - 1] + this.duration;
				i++;
			}
		}
	}

	resetBookingTimes() {
		this.setBookingTimes()
		this.setAvailability()
	}

	setAvailability() {
		this.setNewAvailability()
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

	setNewAvailability(){
		let n = this.bookingTimes.length;
		this.newAvailability[this.monday] = {}
		this.newAvailability[this.monday].times = this.bookingTimes;
		this.newAvailability[this.monday].slots = []
		for (var i = 0; i < n; i++) {
			this.newAvailability[this.monday].slots[i] = []
			for (var j = 0; j < 7; j++) {
				if (this.workingDays[j]) {
					this.newAvailability[this.monday].slots[i][j] = 1;
				} else {
					this.newAvailability[this.monday].slots[i][j] = 0;
				}
			}
		}
		console.log(this);
	}

	setAvailable(hour, day) {
		let slots = this.availability.slots
		let slot = slots[hour][day]
		if (this.loggedIn) {
			if (slot === 0 || slot === 1) {
				slots[hour][day] = (slot === 1) ? 0 : 1
			} else if (slot === 3) {
				console.log('are you shure you want to remove this booking?')
			}
		} else { // not logged in
			if (slot === 1) {
				if (this.selected) {
					slots[this.selected.h][this.selected.d] = 1 // reset previously selected slot
				}
				slots[hour][day] = 2;
				this.selected = {
					h: hour,
					d: day
				}
			} else {
				console.log("can not click there");
			}
		}

	}

	setClasses(val) {
		if (this.loggedIn) {
			switch (val) {
				case 0:
					return 'fa fa-circle-thin fa-2x'
				case 1:
					return 'fa fa-circle fa-2x clk'
				case 2:
					return 'fa fa-circle fa-2x bkd'
				case 3:
					return 'fa fa-circle fa-2x set'
			}
		} else {
			switch (val) {
				case 0:
					return 'fa fa-circle-thin fa-2x set'
				case 1:
					return 'fa fa-circle fa-2x clk'
				case 2:
					return 'fa fa-circle fa-2x bkd'
				case 3:
					return 'fa fa-circle fa-2x set'
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
	bindings,
	template
}
