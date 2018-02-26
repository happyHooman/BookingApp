import template from './week-selector.template.html'
import componentStyle from './week-selector.style.scss'

class WeekSelector {
	constructor($scope) {
		this.$scope = $scope
	}

	$onInit() {
		this.monday = this.getMonday()
		this.$scope.$parent.$ctrl.monday = this.monday
	}

	changeWeek(increment) {
		if (increment > 0) {
			this.monday += 7 * 24 * 60 * 60 * 1000
		} else {
			if (this.monday > new Date().valueOf()) {
				this.monday -= 7 * 24 * 60 * 60 * 1000
			} 
		}
		this.$scope.$parent.$ctrl.monday = this.monday
	}

	getMonday() {
		let date = new Date()
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() ? date.getDay() - 1 : 6)).valueOf()
	}
}

export const weekSelectorComponent = {
	controller: WeekSelector,
	template
}
