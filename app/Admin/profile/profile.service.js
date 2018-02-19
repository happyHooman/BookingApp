import { API } from '../../api.url'

class ProfileService {
  constructor($http, $location) {
    this.$http = $http
    this.$location = $location
  }

  loadProfile(){
    const userId = localStorage.getItem('UID')
    const url = API.base + API.companies + '/' + userId
    return this.$http.get(url)
  }

  saveProfile(data){
    const url = API.base + API.companies
    const token = localStorage.getItem('auth-token')
    this.$http({
      method: 'PUT',
      headers: {'Authorization': token},
      data,
      url
    }).then(res => {
      console.log(res.data);
      alert('Your changes have been saved!')
    })
  }

  signOut() {
		if (confirm("Are You Shure You Want To Sign Out?")) {
			localStorage.removeItem('auth-token')
			localStorage.removeItem('UID')
			this.$location.path('/')
		}
	}
}

export default ProfileService
