import template from './go-back.template.html'
import componentStyles from './go-back.style.scss'

class GoBackController {
  constructor($location) {
    this.$location = $location
  }

  goBack(){
    this.$location.path('/user-view')
  }
}

export const goBackComponent = {
	controller: GoBackController,
	template
}
