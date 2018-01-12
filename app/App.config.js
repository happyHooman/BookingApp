import {$routeProvider, $locationProvider} from 'angular-route'

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/', {
            templateUrl: 'PageTemplates/userView.template.html'
        })
        .when('/login',{
            templateUrl: 'PageTemplates/login.template.html'
        })
        .when('/recover',{
            templateUrl: 'PageTemplates/recover.template.html'
        })
        .when('/register',{
            templateUrl: 'PageTemplates/register.template.html'
        })
        .when('/dashboard',{
            templateUrl: 'PageTemplates/dashboard.template.html'
        })
        .when('/bookings',{
            templateUrl: 'PageTemplates/bookings.template.html'
        })
        .when('/calendar',{
            templateUrl: 'PageTemplates/calendar.template.html'
        })
        .when('/profile',{
            templateUrl: 'PageTemplates/profile.template.html'
        })
        .when('/newService',{
            templateUrl: 'PageTemplates/newService.template.html'
        })
        .when('/company',{
            templateUrl: 'PageTemplates/companyProfile.template.html'
        })
        .otherwise({
            redirectTo: '/dashboard'
        })
}

export default appConfig;