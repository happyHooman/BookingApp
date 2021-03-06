import {$routeProvider, $locationProvider} from 'angular-route'

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/', {
            templateUrl: 'pages/choose-type.html'
        })
        .when('/edit-service/:id', {
            templateUrl: 'pages/edit-service.html'
        })
        .when('/user-view', {
            templateUrl: 'pages/user-view.html'
        })
        .when('/login',{
            templateUrl: 'pages/login.html'
        })
        .when('/recover',{
            templateUrl: 'pages/recover.html'
        })
        .when('/register',{
            templateUrl: 'pages/register.html'
        })
        .when('/dashboard',{
            templateUrl: 'pages/dashboard.html'
        })
        .when('/bookings',{
            templateUrl: 'pages/bookings.html'
        })
        .when('/calendar',{
            templateUrl: 'pages/calendar.html'
        })
        .when('/profile',{
            templateUrl: 'pages/profile.html'
        })
        .when('/new-service',{
            templateUrl: 'pages/new-service.html'
        })
        .when('/company/:id',{
            templateUrl: 'pages/company-profile.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}

export default appConfig;
