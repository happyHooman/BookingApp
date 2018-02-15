import { API } from '../../../api.url'

class RegisterService {
  constructor($http, $location) {
    this.$http = $http
    this.$location = $location
  }
  register(data){
    const url = API.base + API.signup
		this.$http.post(url, data).then(res => {
			alert(res.data)
			this.$location.path('/login')
		}, err => {
			alert(err.data)
		})
  }
}

export default RegisterService
