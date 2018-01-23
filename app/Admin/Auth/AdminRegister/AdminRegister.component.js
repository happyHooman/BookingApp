import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.scss'
import {ApiUrl} from '../../../ApiUrl.constants'

class AdminRegisterController {
    constructor($http) {
      this._http = $http;
        this.user = {
          name: '',
          email: '',
          password: ''
        }
    }

    createUser(){
      console.log(this.user);

      //first check if mail is not used
      // in order to do that:
      //we send the email to the server and the server should return if this email is used by someone else or not
      //based on that we can

      // create user
      this._http.post(ApiUrl.base + ApiUrl.users, this.user).then(()=>{
        console.log("The user",this.user.name, "has been created.");
      });


      this.company = {
        email: this.user.email,
        name: '',
        description: '',
        logo: ''
      }

      // create associated company
      this._http.post(ApiUrl.base + ApiUrl.companies, this.company).then(()=>{
        console.log("associated company has been created");
      })

    }

    $onInit() {
    }
}



export const adminRegisterComponent = {
    controller: AdminRegisterController,
    controllerAs: '$ctrl',
    template
}
