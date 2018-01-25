import template from './company-profile.template.html'
import {ApiUrl} from '../../ApiUrl.constants'

class CompanyProfileController {
  constructor($routeParams, $http){
    this._routeParams = $routeParams
    this._http = $http
  }
  $onInit(){
    this.loadCompany()
  }

  loadCompany(){
    this._http.get(ApiUrl.base + ApiUrl.companies + this._routeParams.id).then(res=>{
      this.company = res.data;
    })
  }
}

export const companyProfileComponent = {
  controller: CompanyProfileController,
  controllerAs: '$ctrl',
  template
}
