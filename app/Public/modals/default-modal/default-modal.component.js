import template from './default-modal.template.html'

class DefaultModalController {
  constructor(){
    this.componentName = 'DefaultModalComponent'
  }
  onInit(){
  }
}

export const defaultModalComponent ={
  controller: DefaultModalController,
  controllerAs: '$ctrl',
  template
}
