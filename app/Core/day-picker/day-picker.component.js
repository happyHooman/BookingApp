import template from './day-picker.template.html'

class DayPickerController {
	constructor() {
		this.selectedTime = [1, 1];
		this.hours = [
			{
				time: 7,
				selected: false
			},
			{
				time: 8,
				selected: false
			},
			{
				time: 9,
				selected: false
			},
			{
				time: 10,
				selected: false
			},
			{
				time: 11,
				selected: false
			},
			{
				time: 12,
				selected: false
			},
			{
				time: 13,
				selected: false
			},
			{
				time: 14,
				selected: false
			},
			{
				time: 15,
				selected: false
			},
			{
				time: 16,
				selected: false
			},
			{
				time: 17,
				selected: false
			},
			{
				time: 18,
				selected: false
			}];
		this.days = [
			{
				day: 'MON',
				hours: this.cloneHours()
			},
			{
				day: 'TUE',
				hours: this.cloneHours()
			},
			{
				day: 'WED',
				hours: this.cloneHours()
			},
			{
				day: 'THU',
				hours: this.cloneHours()
			},
			{
				day: 'FRI',
				hours: this.cloneHours()
			},
			{
				day: 'SAT',
				hours: this.cloneHours()
			},
			{
				day: 'SUN',
				hours: this.cloneHours()
			}
		];
		this.busy = {
			nu: 'fa fa-circle-thin fa-2x',
			da: 'fa fa-circle fa-2x',
			clk: 'fa fa-circle fa-2x clk'
		}
	}


	cloneHours() {
		return this.hours.map((item) => {
			return Object.assign({}, item)
		})
	}

	$onInit() {}

	setTime(day, hour, hourIndex) {
		hour.selected = !hour.selected;
	}

}

export const dayPickerComponent = {
	controller: DayPickerController,
	controllerAs: '$ctrl',
	template
}
