import angular from 'angular';

import {serviceCardComponent} from './service/serviceCard/serviceCard.component'
import ServiceListService from './service/serviceList/serviceList.service'
import {serviceListComponent} from './service/serviceList/serviceList.component'

import DayPickerService from './day-picker/day-picker.service'
import {dayPickerComponent} from './day-picker/day-picker.component'

import {redirectAdminComponent} from './redirect/redirect-admin.component'
import {redirectUserComponent} from './redirect/redirect-user.component'

import {weekSelectorComponent} from './week-selector/week-selector.component'
import dateRange from './date-range-filter/date-range.filter'

import {goTopComponent} from './apendixes/go-top/go-top.component'
import {goBackComponent} from './apendixes/go-back/go-back.component'

// INTERCEPTOR
import CoreInterceptor from './core.interceptor'
import coreModuleConfig from './core.config'

export default angular.module('Core', [])
	.config(coreModuleConfig)
	.filter('dateRange', dateRange)
	.factory('CoreInterceptor', CoreInterceptor)
	.service('ServiceListService', ServiceListService)
	.service('DayPickerService', DayPickerService)
	.component('serviceCardComponent', serviceCardComponent)
	.component('serviceListComponent', serviceListComponent)
	.component('dayPickerComponent', dayPickerComponent)
	.component('redirectAdminComponent', redirectAdminComponent)
	.component('redirectUserComponent', redirectUserComponent)
	.component('weekSelectorComponent', weekSelectorComponent)
	.component('goTopComponent', goTopComponent)
	.component('goBackComponent', goBackComponent)
