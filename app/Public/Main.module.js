import angular from 'angular';

import {modalContainerComponent} from './modals/modal-container/modal-container.component'
import {personalDetailsComponent} from './modals/personal-details/personal-details.component'
import {bookingTimeComponent} from './modals/booking-time/booking-time.component'
import {successComponent} from './modals/success/success.component'
import {companyProfileComponent} from './company-profile/company-profile.component'

 export default angular.module('Public', [])
     .component('modalContainerComponent',modalContainerComponent)
     .component('personalDetailsComponent',personalDetailsComponent)
     .component('bookingTimeComponent',bookingTimeComponent)
     .component('successComponent',successComponent)
     .component('companyProfileComponent',companyProfileComponent)
