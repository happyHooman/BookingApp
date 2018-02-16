import template from './edit-service.template.html'
import ServicesService from './services.service'

class EditServiceController {
	constructor(ServicesService) {
		this.servicesService = ServicesService
		this.duration = 3600000
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
			if (!this.service.name) {
				this.title = 'Add Service'
				this.buttonName = 'Save Service'
			}
		})
	}

	setDurationValue() {
		this.duration = (this.service.duration.hours * 60 + this.service.duration.minutes) * 60000;
	}

	saveService() {
		this.servicesService.saveService(this.service)
	}

}

export const editServiceComponent = {
	controller: EditServiceController,
	template
}
