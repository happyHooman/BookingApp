import {$routeProvider, $locationProvider} from 'angular-route'

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/', {
            templateUrl: 'PageTemplates/user-view.html'
        })
        .when('/login',{
            templateUrl: 'PageTemplates/login.html'
        })
        .when('/recover',{
            templateUrl: 'PageTemplates/recover.html'
        })
        .when('/register',{
            templateUrl: 'PageTemplates/register.html'
        })
        .when('/dashboard',{
            templateUrl: 'PageTemplates/dashboard.html'
        })
        .when('/bookings',{
            templateUrl: 'PageTemplates/bookings.html'
        })
        .when('/calendar',{
            templateUrl: 'PageTemplates/calendar.html'
        })
        .when('/profile',{
            templateUrl: 'PageTemplates/profile.html'
        })
        .when('/newService',{
            templateUrl: 'PageTemplates/new-service.html'
        })
        .when('/company',{
            templateUrl: 'PageTemplates/company-profile.html'
        })
        .otherwise({
            redirectTo: '/dashboard'
        })
}

export default appConfig;