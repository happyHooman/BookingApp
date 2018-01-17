import template from './account-login.template.html'

class AccountLoginController {
  constructor() {
    this.componentName='AccountLoginComponent'
  }
  onInit(){

  }
}

export const accountLoginComponent ={
  controller: AccountLoginController,
  controllerAs: '$ctrl',
  template
}
