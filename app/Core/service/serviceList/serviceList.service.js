import { API } from '../../../api.url'

class ServiceListService {
  constructor($http, $routeParams) {
    this.$http = $http
    this.$routeParams = $routeParams
  }


  loadServices() {
		if (localStorage.getItem('auth-token')) {
			const userId = localStorage.getItem('UID')
			const url = API.base + API.services + '/company/' + userId
			return this.$http.get(url)
		} else if (this.$routeParams.id) {
			const url = API.base + API.services + '/company/' + this.$routeParams.id
			return this.$http.get(url)
		} else {
			const url = API.base + API.services
			return this.$http.get(url)
		}
	}

  deleteService(id) {
    const url = API.base + API.services + '/' + id
    const token = localStorage.getItem('auth-token')
    this.$http({
      method: 'DELETE',
      headers: {'Authorization': token},
      url
    }).then(res => {
      console.log(res.data);
    }, err => {
      console.log(err.data);
    })
	}

}

export default ServiceListService
