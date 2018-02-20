import template from './edit-service.template.html'
import ServicesService from './services.service'
import faker from 'faker'

class EditServiceController {
	constructor(ServicesService) {
		this.servicesService = ServicesService
		this.title = 'Edit Service'
		this.buttonName = 'Save Changes'
		this.hourOptions = [
			{
				name: '0 hours',
				value: 0
			}, {
				name: '1 hour',
				value: 1
			}, {
				name: '2 hours',
				value: 2
			}, {
				name: '3 hours',
				value: 3
			}, {
				name: '4 hours',
				value: 4
			}, {
				name: '5 hours',
				value: 5
			}, {
				name: '6 hours',
				value: 6
			}, {
				name: '7 hours',
				value: 7
			}, {
				name: '8 hours',
				value: 8
			}
		];
		this.minuteOptions = [
			{
				name: '00 minutes',
				value: 0
			}, {
				name: '05 minutes',
				value: 5
			}, {
				name: '10 minutes',
				value: 10
			}, {
				name: '15 minutes',
				value: 15
			}, {
				name: '20 minutes',
				value: 20
			}, {
				name: '25 minutes',
				value: 25
			}, {
				name: '30 minutes',
				value: 30
			}, {
				name: '35 minutes',
				value: 35
			}, {
				name: '40 minutes',
				value: 40
			}, {
				name: '45 minutes',
				value: 45
			}, {
				name: '50 minutes',
				value: 50
			}, {
				name: '55 minutes',
				value: 55
			}
		];
	}

	$onInit() {
		this.loadService()
	}

	loadService() {
		this.servicesService.loadService().then(res => {
			this.service = res.data
			this.setDurationValue()
			if (!this.service.name) {
				this.title = 'Add Service'
				this.buttonName = 'Save Service'
			}
			this.durationDisable = this.preventDurationChange()
		})
	}

	preventDurationChange(){
		let returnValue = false
		if (this.service.availability) {
			let slots = this.service.availability.slots
			slots.forEach(slot=>{
				if (slot.indexOf(3)!==-1) {
					returnValue = true
				}
			})
		}
		return returnValue
	}

	fakeService(){
		this.service.name = this.toTitleCase(faker.lorem.words(2))
		this.service.description = faker.lorem.paragraph()
		this.service.price = faker.random.number(300)
		this.service.spaces = faker.random.number(5)+1
	}

	toTitleCase(str) {
		return str.replace(/\w\S*/g, txt => {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	setDurationValue() {
		this.duration = (this.service.duration.hours * 60 + this.service.duration.minutes) * 60000;
	}

	saveService() {
		if (this.duration === this.service.availability.times[1] - this.service.availability.times[0]) {
			this.servicesService.saveService(this.service)
		} else {
			alert(`don't be kidding me! Please reset services duration or booking times`)
		}
	}

}

export const editServiceComponent = {
	controller: EditServiceController,
	template
}
