import template from './default-modal.template.html'
import {ApiUrl} from '../../../ApiUrl.constants'

class DefaultModalController {
	constructor($http) {
		this._http = $http
		this.step = 1;
		this.booking = {
			name: '',
			email: '',
			phone: '',
			time: 0
		}
	}

	$onInit() {
	}

	sendBooking(){
		if(this.selectedDate){
			this.setBookingTime()
			this.booking.serviceId = this.service.id
			this.booking.companyId = this.service.companyId
			this.booking.serviceName = this.service.name

			this._http.post(ApiUrl.base + ApiUrl.bookings, this.booking) // add booking to database

			this.service.availability.slots[this.selectedDate.h][this.selectedDate.d]=3; // update availability slots
			this._http.put(ApiUrl.base + ApiUrl.services + this.service.id, this.service); // update service in db
			this.step=3
		} else {
			console.log("please select a time for your booking");
		}
	}

	close(){
		this.step = 1;
		this.booking = {
			name: '',
			email: '',
			phone: '',
			time: 0
		}
		this.selectedDate = undefined;
		$('#modal_'+ this.service.id).modal("hide")
	}

	setBookingTime(){
		let monday = new Date(2018,1,5).valueOf() //this is the first day of the selected week
		let dayOfTheWeek = this.selectedDate.d*86400000; // in milliseconds
		let hour = new Date(this.service.availability.times[this.selectedDate.h]).valueOf() // all times in the times array are saved as a timestamp for the specific hour on January 1, 2010
		let reper = new Date(2010,0,1).valueOf() // this is the day all services are set to, only hour changes
		this.booking.time = new Date(hour - reper + monday + dayOfTheWeek).valueOf() //save it in timestamp because it's easier to save and read without errors
	}
}

const bindings = {
	service: '<'
}

export const defaultModalComponent = {
	controller: DefaultModalController,
	controllerAs: '$ctrl',
	bindings,
	template
}
