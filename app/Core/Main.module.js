import angular from 'angular';

import {navbarComponent} from './Navbar/Navbar.component'
import {serviceCardComponent} from './Service/ServiceCard/ServiceCard.component'
import {serviceListComponent} from './Service/ServiceList/ServiceList.component'
import {dayPickerComponent} from './day-picker/day-picker.component'

export default angular.module('Core', [])
    .component('navbarComponent', navbarComponent)
    .component('serviceCardComponent', serviceCardComponent)
    .component('serviceListComponent', serviceListComponent)
    .component('dayPickerComponent', dayPickerComponent)
