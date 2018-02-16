import { API } from '../../../api.url'

class ServiceCardService {
  constructor($http, $routeParams) {
    this.$http = $http
    this.$routeParams = $routeParams
  }

  loadCompanyDetails(userId) {
    const url = API.base + API.companies + '?userId=' + userId
    return this.$http.get(url)
  }

  isCompanyProfile(){
    return this.$routeParams.id ? true : false
  }
}

export default ServiceCardService
