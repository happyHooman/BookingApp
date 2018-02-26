import template from './profile.template.html'
import componentStyle from './profile.style.scss'
import ProfileService from './profile.service'
import faker from 'faker'

class ProfileController {
	constructor(ProfileService) {
		this.profileService = ProfileService
	}

	$onInit() {
		this.loadProfile()
	}

	fakeCompany(){
		this.company.name = faker.company.companyName()
		this.company.description = faker.lorem.paragraph()
		this.company.logo = faker.image.avatar()
	}

	toTitleCase(str) {
		return str.replace(/\w\S*/g, txt => {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	signOut() {
		this.profileService.signOut()
	}

	loadProfile() {
		this.profileService.loadProfile()
			.then(res => {
				this.company = res.data
			})
	}

	saveSettings() {
		this.profileService.saveProfile(this.company)
	}
}

export const profileComponent = {
	controller: ProfileController,
	template,
}
