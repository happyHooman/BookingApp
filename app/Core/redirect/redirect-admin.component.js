class RedirectAdminController {
	constructor($location) {
		this._location = $location;
	}

	$onInit() {
		if (localStorage.getItem('auth-token')) {
			this._location.path('/dashboard')
		}
	}
}

export const redirectAdminComponent = {
	controller: RedirectAdminController
}
