import template from './company-profile.template.html'
import CompanyProfileService from './company-profile.service'

class CompanyProfileController {
  constructor(CompanyProfileService){
    this.companyProfileService = CompanyProfileService
  }
  $onInit(){
    this.companyProfileService.loadCompany().then(res=>{
      this.company = res.data
    }, err =>{
      console.log(err.data)
    })
  }


}

export const companyProfileComponent = {
  controller: CompanyProfileController,
  template
}
