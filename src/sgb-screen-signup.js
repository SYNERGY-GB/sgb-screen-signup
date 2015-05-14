'use strict';

angular.module('sgb-screen-signup', ['megazord'])
  .controller('sgb-screen-signup-controller', ['$stateParams', '_screen', '_screenParams','$scope', function($stateParams, _screen, _screenParams, $scope){

        _screen.initialize($scope, _screenParams);

        $scope.params = $stateParams.data;

        $scope.performSubmit = function(){};

  }]);