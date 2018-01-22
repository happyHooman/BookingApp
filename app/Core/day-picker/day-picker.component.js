import template from './day-picker.template.html'

class DayPickerController {
	constructor() {
		this.weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
		this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
			18, 19, 20, 21, 22, 23];
	}

	$onInit() {
	}

	setAvailable(hour, day) {
		this.availability[hour + this.workingHours[0]][day] = this.availability[hour + this.workingHours[0]][day]? 0: 1;
		console.log(this.weekdays[day], 'at', hour + this.workingHours[0]);
	}
}

const bindings = {
	availability: '=',
	workingHours: '<'
}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	bindings,
	template
}
