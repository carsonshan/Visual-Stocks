'use strict';

angular.module('appApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Portfolio',
      'link': '/'
	},{
      'title': 'Volume',
      'link': '/Volume'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
