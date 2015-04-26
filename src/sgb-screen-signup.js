'use strict';

angular.module('sgb-screen-signup', ['megazord'])
  .controller('sgb-screen-signup-controller', ['$stateParams', '_screenParams','$scope', function($stateParams, _screenParams, $scope){

        $scope.title = _screenParams.title || 'signup_title';
        $scope.params = $stateParams.data;

        $scope.performSubmit = function(){};

  }]);