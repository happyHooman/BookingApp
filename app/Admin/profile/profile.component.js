import template from './profile.template.html'
import { ApiUrl } from '../../ApiUrl.constants'

class ProfileController {
	constructor($http, $location) {
		this._http = $http
    this._location = $location;
	}

	$onInit() {
		this.loadProfile()
  }

  signOut(){
		if(confirm("Are You Shure You Want To Sign Out?")){
    localStorage.removeItem('userInfo')
		this._location.path('/')
		}
  }

	loadProfile(){
		let email = JSON.parse(localStorage.getItem('userInfo')).email
		this._http.get(ApiUrl.base + ApiUrl.companies).then(res=>{
			this.company = res.data.filter(company=>company.email===email)[0]
		})
	}

	saveSettings(){
		this._http.put(ApiUrl.base + ApiUrl.companies + this.company.id, this.company)
		alert("Profile Saved");
	}
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
