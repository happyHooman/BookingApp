import template from './modal-container.template.html'
import componentStyle from './modal.style.scss'
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
		this.i = 0
	}

	sendBooking() {
		if (this.selectedDate) {
			this.setBookingTime()
			this.booking.serviceId = this.service._id
			this.booking.userId = this.service.userId

			this.addBooking()
			this.updateService()
			// this.step = 3
		} else {
			console.log("please select a time for your booking");
		}
	}

	fakeUser() {
		this.booking.name = faker.name.findName()
		this.booking.email = faker.internet.email()
		this.booking.phone = faker.phone.phoneNumberFormat()

		this.fakeBooking()
	}

	fakeBooking() {
		const random = faker.random.number
		let weeks = []
		for (let key in this.service.availability) {
			weeks.push(key)
		}
		let l = weeks.length
		let w, h, d, day
		do {
			w = parseInt(weeks[random(l - 1)])
			h = random(this.service.availability[w].slots.length - 1)
			day = this.service.availability[w].slots[h]
			d = random(6)
		} while (day[d] !== 1)

		this.selectedDate = {h, d, w}
		if (day[d] === 1) {
			this.setBookingTime()
			console.log(this.selectedDate);
			this.sendBooking()
		}

		if (this.i < 30) {
			this.i++
			console.log(this.i);
			this.fakeUser()
		}
	}

	addBooking() {
		this.modalService.addBooking(this.booking).then(res => {
			// console.log(res.data);
		}, err => {
			console.log(err.data);
		})
	}

	updateService() {
		this.service.availability[this.selectedDate.w].slots[this.selectedDate.h][
			this.selectedDate.d] = 3
		this.modalService.updateService(this.service)
	}

	close() {
		this.step = 1;
		this.booking = {
			name: '',
			email: '',
			phone: '',
			time: 0
		}
		this.selectedDate = undefined;
		$('#modal_' + this.service._id).modal("hide")
	}

	setBookingTime() {
		let monday = this.selectedDate.w //selected week
		let dayOfTheWeek = this.selectedDate.d * 86400000; // in milliseconds
		let hour = new Date(this.service.availability[monday].times[this.selectedDate
			.h]).valueOf()
		let reper = new Date(2010, 0, 1).valueOf() // this is the day all services are set to, only hour changes
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
