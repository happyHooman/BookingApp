import angular from 'angular';

import Core from './Core/Main.module';
import Admin from './Admin/Main.module';
import Public from './Public/Main.module';
import appConfig from './App.config'


class IndexController {
    constructor() { }
}

angular.module('App', [
    'ngRoute',
    'Core',
    'Admin',
    'Public'])
        .controller('IndexController', IndexController)
        .config(appConfig)
