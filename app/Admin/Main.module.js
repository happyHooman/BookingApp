import angular from 'angular';

// AUTH
import {navbarComponent} from './Navbar/Navbar.component'
import {adminLoginComponent} from './Auth/AdminLogin/AdminLogin.component';
import {adminRecoverComponent} from './Auth/AdminRecover/AdminRecover.component';
import {adminRegisterComponent} from './Auth/AdminRegister/AdminRegister.component';

// BOOKING
import {adminBookingListComponent} from './Booking/AdminBookingList/AdminBookingList.component';

// SERVICE
import {editServiceComponent} from './Service/edit-service/edit-service.component'
import {createServiceComponent} from './Service/edit-service/create-service.component'

//PROFILE
import {profileComponent} from './profile/profile.component'
import {experimentalComponent} from './profile/experimental.component'

export default angular.module('Admin', [])
    .component('navbarComponent', navbarComponent)
    .component('adminLoginComponent', adminLoginComponent)
    .component('adminRecoverComponent', adminRecoverComponent)
    .component('adminRegisterComponent', adminRegisterComponent)
    .component('adminBookingListComponent', adminBookingListComponent)
    .component('editServiceComponent', editServiceComponent)
    .component('createServiceComponent', createServiceComponent)
    .component('profileComponent', profileComponent)
    .component('experimentalComponent', experimentalComponent)
