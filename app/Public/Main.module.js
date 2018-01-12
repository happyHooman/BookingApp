import angular from 'angular';

import {createBookingComponent} from './Booking/CreateBooking.component'

 export default angular.module('Public', [])
     .component('createBookingComponent',createBookingComponent)
