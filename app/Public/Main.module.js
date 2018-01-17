import angular from 'angular';

import {createBookingComponent} from './Booking/CreateBooking.component'
import {defaultModalComponent} from './modals/default-modal/default-modal.component'
import {dataModalComponent} from './modals/data-modal/data-modal.component'
import {calendarModalComponent} from './modals/calendar-modal/calendar-modal.component'
import {successModalComponent} from './modals/success-modal/success-modal.component'

 export default angular.module('Public', [])
     .component('createBookingComponent',createBookingComponent)
     .component('defaultModalComponent',defaultModalComponent)
     .component('dataModalComponent',dataModalComponent)
     .component('calendarModalComponent',calendarModalComponent)
     .component('successModalComponent',successModalComponent)
