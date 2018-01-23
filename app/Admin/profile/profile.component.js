import template from './profile.template.html'

class ProfileController {
	constructor($http, $location) {
    this._http = $http;
    this._location = $location;
	}

	$onInit() {
  }

  signOut(){
    localStorage.removeItem('userEmail');
  }
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
