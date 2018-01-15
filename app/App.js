import angular from 'angular';

import Core from './Core/Main.module';
import Admin from './Admin/Main.module';
import Public from './Public/Main.module';
import appConfig from './App.config'

import componentStyles from './PageTemplates/page-styles.css'

class IndexController {
    constructor() {

    }

    $onInit() {
        console.log('Index controller initalized');
    }
}

angular.module('App', [
    'ngRoute',
    'Core',
    'Admin',
    'Public'])
        .controller('IndexController', IndexController)
        .config(appConfig)
