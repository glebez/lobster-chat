angular.module('lobsterChat').directive('lcHeader', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'assets/templates/directives/lcHeader.html',
    controller: function ($scope, $location) {
      $scope.isPage = function(name) {
        return new RegExp(name + "/?$").test($location.path());
      };
    }

  };

});