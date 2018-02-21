import template from './week-selector.template.html'

class WeekSelector {
  constructor() {
    this.weeks = [
      `Feb 19 - 25, 2018`,
      `Feb 26 - Mar 4, 2018`,
      `Mar 5 - 11, 2018`
    ]

    }
  $onInit(){
    this.week = this.weeks[1]
  }

  changeWeek(increment){
    let index = this.weeks.indexOf(this.week)
    this.week = this.weeks[index + increment]
  }
}

export const weekSelectorComponent={
  controller: WeekSelector,
  template
}
