import template from './modal-container.template.html'
import ModalService from './modal.service'
import faker from 'faker'

class ModalContainerController {
	constructor(ModalService) {
		this.modalService = ModalService
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
			this.booking.serviceId = this.service._id
			this.booking.userId = this.service.userId

			this.addBooking()
			this.updateService()
			this.step = 3
		} else {
			console.log("please select a time for your booking");
		}
	}

	fakeUser(){
		this.booking.name = faker.name.findName()
		this.booking.email = faker.internet.email()
		this.booking.phone = faker.phone.phoneNumberFormat()
	}

	addBooking(){
		this.modalService.addBooking(this.booking).then(res =>{
			console.log(res.data);
		},err=>{
			console.log(err.data);
		})
	}

	updateService(){
		this.service.availability.slots[this.selectedDate.h][this.selectedDate.d] = 3
		this.modalService.updateService(this.service)
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
		$('#modal_'+ this.service._id).modal("hide")
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

export const modalContainerComponent = {
	controller: ModalContainerController,
	bindings,
	template
}
