import angular from 'angular';

import {serviceCardComponent} from './service/serviceCard/serviceCard.component'
import ServiceListService from './service/serviceList/serviceList.service'
import {serviceListComponent} from './service/serviceList/serviceList.component'

import DayPickerService from './day-picker/day-picker.service'
import {dayPickerComponent} from './day-picker/day-picker.component'

import {redirectAdminComponent} from './redirect/redirect-admin.component'
import {redirectUserComponent} from './redirect/redirect-user.component'

export default angular.module('Core', [])
    .service('ServiceListService', ServiceListService)
    .service('DayPickerService', DayPickerService)
    .component('serviceCardComponent', serviceCardComponent)
    .component('serviceListComponent', serviceListComponent)
    .component('dayPickerComponent', dayPickerComponent)
    .component('redirectAdminComponent', redirectAdminComponent)
    .component('redirectUserComponent', redirectUserComponent)
