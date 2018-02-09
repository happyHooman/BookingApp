import template from './company-profile.template.html'
import { API } from '../../api.url'

class CompanyProfileController {
  constructor($routeParams, $http){
    this._routeParams = $routeParams
    this._http = $http
  }
  $onInit(){
    this.loadCompany()
  }

  loadCompany(){
    const url = API.base + API.companies + '?userId=' + this._routeParams.id
    this._http.get(url).then(res=>{
      this.company = res.data;
    })
  }
}

export const companyProfileComponent = {
  controller: CompanyProfileController,
  controllerAs: '$ctrl',
  template
}
