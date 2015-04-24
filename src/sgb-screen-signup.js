'use strict';

angular.module('sgb-screen-signup', ['megazord'])
  .controller('sgb-screen-signup-controller', ['$stateParams', '$scope', function($stateParams, $scope){
    $scope.params = $stateParams.data;

    $scope.performSubmit = function(){};

  }]);