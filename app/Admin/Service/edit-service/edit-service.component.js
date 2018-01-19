import template from './edit-service.template.html'

class EditServiceController{
  constructor(){
    this.service = {};
  }
  $onInit(){
    this.service = JSON.parse(localStorage.getItem('service'));
    localStorage.removeItem('service');
    console.log(localStorage);
  }
  saveService(){
    console.log('Service Saved', this.service);
  }
}

const bindings = {
    service: '<'
}


export const editServiceComponent = {
  controller: EditServiceController,
  controllerAs: '$ctrl',
  template
}
