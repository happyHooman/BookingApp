import angular from 'angular';

import {createBookingComponent} from './Booking/CreateBooking.component'
import {defaultModalComponent} from './modals/default-modal/default-modal.component'
import {personalDetailsModalComponent} from './modals/personal-details-modal/personal-details-modal.component'
import {bookingTimeModalComponent} from './modals/booking-time-modal/booking-time-modal.component'
import {successModalComponent} from './modals/success-modal/success-modal.component'

 export default angular.module('Public', [])
     .component('createBookingComponent',createBookingComponent)
     .component('defaultModalComponent',defaultModalComponent)
     .component('personalDetailsModalComponent',personalDetailsModalComponent)
     .component('bookingTimeModalComponent',bookingTimeModalComponent)
     .component('successModalComponent',successModalComponent)
