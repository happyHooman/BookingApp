import template from './week-selector.template.html'

class WeekSelector {
	constructor() {
		this.weeks = [
      `5 - 11 Feb 2018`,
      `12 - 18 Feb 2018`,
      `19 - 25 Feb 2018`,
      `26 Feb - 4 Mar 2018`,
      `5 - 11 Mar 2018`,
      `12 - 18 Mar 2018`,
      `19 - 25 Mar 2018`
    ]
	}

	$onInit() {
		this.monday = this.getMonday()

	}

	changeWeek(increment) {
		if (increment > 0) {
			this.monday.setDate(this.monday.getDate() + 7)
		} else {
			this.monday.setDate(this.monday.getDate() - 7)
		}
	}

	getMonday() {
		let date = new Date()
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() ?
			date.getDay() - 1 : 6))
	}
}

export const weekSelectorComponent = {
	controller: WeekSelector,
	template
}
