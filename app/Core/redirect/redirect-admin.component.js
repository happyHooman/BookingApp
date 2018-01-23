class RedirectAdminController {
	constructor($location) {
		this._location = $location;
	}

	$onInit() {
		if (localStorage.getItem('userEmail')) {
			this._location.path('/dashboard')
		}
	}
}

export const redirectAdminComponent = {
	controller: RedirectAdminController
}
