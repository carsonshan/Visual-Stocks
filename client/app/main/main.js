'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/port.html',
        controller: 'MainCtrl'
      }).state('Volume', {
        url: '/Volume',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
