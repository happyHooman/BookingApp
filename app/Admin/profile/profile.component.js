import template from './profile.template.html'
import ProfileService from './profile.service'

class ProfileController {
	constructor($location, ProfileService) {
		this._location = $location
		this.profileService = ProfileService
	}

	$onInit() {
		this.loadProfile()
	}

	signOut() {
		this.profileService.signOut()
	}

	loadProfile() {
		this.profileService.loadProfile()
			.then(res => {
				this.company = res
			})
	}

	saveSettings() {
		this.profileService.saveProfile(this.company)
	}
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
