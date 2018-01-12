import template from './CreateBooking.template.html'

class CreateBookingController{
    constructor(){
        this.componentName = 'createBookingComponent'
    }
    $onInit(){
        console.log('create booking');
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const createBookingComponent = {
    controller: CreateBookingController,
    controllerAs: '$ctrl',
    template,
    bindings
}
