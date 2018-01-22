import template from './day-picker.template.html'

class DayPickerController {
	constructor() {
		this.weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
		this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
			18, 19, 20, 21, 22, 23];
		this.availability = [ // 0 means unset wich is not available for booking, 1 means available, 2 means busy
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		];
		this.workingHours=[7,12];

	}



	cloneHours() {
		return this.hours.map((item) => {
			return Object.assign({}, item)
		})
	}

	$onInit() {}

	setHour(hour) {
		console.log("hour is set to:", hour);
		this.hour = hour;
	}

	selectTime(hour, day) {
		this.availability[hour + this.workingHours[0]][day] = 1;
		console.log(this.weekdays[day], 'at', hour + this.workingHours[0]);
	}

}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	template
}
