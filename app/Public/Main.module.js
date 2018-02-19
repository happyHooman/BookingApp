import angular from 'angular';

import CompanyProfileService from './company-profile/company-profile.service'
import {companyProfileComponent} from './company-profile/company-profile.component'
import {modalContainerComponent} from './modals/modal-container/modal-container.component'
import {personalDetailsComponent} from './modals/personal-details/personal-details.component'
import {bookingTimeComponent} from './modals/booking-time/booking-time.component'
import {successComponent} from './modals/success/success.component'

export default angular.module('Public', [])
  .service('CompanyProfileService', CompanyProfileService)
  .component('companyProfileComponent', companyProfileComponent)
	.component('modalContainerComponent', modalContainerComponent)
	.component('personalDetailsComponent', personalDetailsComponent)
	.component('bookingTimeComponent', bookingTimeComponent)
	.component('successComponent', successComponent)
