import template from './profile.template.html'

class ProfileController {
	constructor($location) {
    this._location = $location;
	}

	$onInit() {
  }

  signOut(){
		if(confirm("Are You Shure You Want To Sign Out?")){
    localStorage.removeItem('userEmail')
		this._location.path('/')
		}
  }
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
