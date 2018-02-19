import { API } from '../../api.url'

class CompanyProfileService {
  constructor($routeParams, $http){
    this.$routeParams = $routeParams
    this.$http = $http
  }
  loadCompany(){
    const url = API.base + API.companies + '/' + this.$routeParams.id
    return this.$http.get(url)
  }
}

export default CompanyProfileService
