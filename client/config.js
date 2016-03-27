'use strict'

var routerApp = angular.module('appRouter', ['ui.router', 'TradeBlotter']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'modules/tradeblotter/tradeBlotter.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'modules/about/about.html'
        });
});
