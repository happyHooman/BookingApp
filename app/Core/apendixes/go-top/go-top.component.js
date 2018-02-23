import template from './go-top.template.html'
import componentStyles from './go-top.style.scss'

class GoTopController {
  constructor() {

  }

  $onInit(){
    window.onscroll = this.whenScrolling
  }

  whenScrolling(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementsByClassName('go-top')[0].style.display = 'block'
    } else {
        document.getElementsByClassName('go-top')[0].style.display = 'none'
    }
  }

  goTop(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  $onDestroy(){
    window.onscroll = function (){}
  }
}

export const goTopComponent = {
	controller: GoTopController,
	template
}
