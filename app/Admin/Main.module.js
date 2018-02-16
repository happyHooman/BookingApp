import angular from 'angular'

// AUTH
import LoginService from './auth/login/login.service'
import RegisterService from './auth/register/register.service'
import {navbarComponent} from './navbar/navbar.component'
import {loginComponent} from './auth/login/login.component'
import {recoverComponent} from './auth/recover/recover.component'
import {registerComponent} from './auth/register/register.component'

// BOOKING
import BookingListService from './booking/bookings-list/bookings-list.service'
import {bookingListComponent} from './booking/bookings-list/bookings-list.component'

// SERVICE
import ServicesService from './service/edit-service/services.service'
import {editServiceComponent} from './service/edit-service/edit-service.component'

//PROFILE
import ProfileService from './profile/profile.service'
import {profileComponent} from './profile/profile.component'

export default angular.module('Admin', [])
	.service('BookingListService', BookingListService)
	.service('LoginService', LoginService)
	.service('RegisterService', RegisterService)
	.service('ProfileService', ProfileService)
	.service('ServicesService', ServicesService)
	.component('navbarComponent', navbarComponent)
	.component('loginComponent', loginComponent)
	.component('recoverComponent', recoverComponent)
	.component('registerComponent', registerComponent)
	.component('bookingListComponent', bookingListComponent)
	.component('editServiceComponent', editServiceComponent)
	.component('profileComponent', profileComponent)
