class RedirectUserController {
	constructor($location) {
		this._location = $location
	}

	$onInit() {
		if (!localStorage.getItem('auth-token')) {
			this._location.path('/')
		}
	}
}

export const redirectUserComponent = {
	controller: RedirectUserController
}
