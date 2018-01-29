class RedirectUserController {
	constructor($location) {
		this._location = $location
	}

	$onInit() {
		if (!localStorage.getItem('userInfo')) {
			this._location.path('/')
		}
	}
}

export const redirectUserComponent = {
	controller: RedirectUserController
}
