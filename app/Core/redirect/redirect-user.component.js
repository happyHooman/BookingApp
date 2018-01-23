class RedirectUserController {
	constructor($location) {
		this._location = $location
	}

	$onInit() {
		if (!localStorage.getItem('userEmail')) {
			this._location.path('/')
		}
	}
}

export const redirectUserComponent = {
	controller: RedirectUserController
}
