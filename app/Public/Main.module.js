import angular from 'angular';

import {createBookingComponent} from './Booking/CreateBooking.component'
import {accountLoginComponent} from './account-login/account-login.component'
import {defaultModalComponent} from './modals/default-modal/default-modal.component'

 export default angular.module('Public', [])
     .component('createBookingComponent',createBookingComponent)
     .component('accountLoginComponent', accountLoginComponent)
     .component('defaultModalComponent',defaultModalComponent)
