import angular from 'angular';

// AUTH
import {navbarComponent} from './Navbar/Navbar.component'
import {loginComponent} from './auth/login/login.component';
import {recoverComponent} from './auth/recover/recover.component';
import {registerComponent} from './auth/register/register.component';

// BOOKING
import {bookingListComponent} from './booking/bookings-list/bookings-list.component';

// SERVICE
import {editServiceComponent} from './Service/edit-service/edit-service.component'
import {createServiceComponent} from './Service/edit-service/create-service.component'

//PROFILE
import {profileComponent} from './profile/profile.component'

export default angular.module('Admin', [])
    .component('navbarComponent', navbarComponent)
    .component('loginComponent', loginComponent)
    .component('recoverComponent', recoverComponent)
    .component('registerComponent', registerComponent)
    .component('bookingListComponent', bookingListComponent)
    .component('editServiceComponent', editServiceComponent)
    .component('createServiceComponent', createServiceComponent)
    .component('profileComponent', profileComponent)
    .service('')
