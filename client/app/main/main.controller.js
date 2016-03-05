'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.getStockData = function() {
        $http.get('/api/things/stock').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
      });
    }
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
