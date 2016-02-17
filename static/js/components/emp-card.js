var module = angular.module('rh.components');

module.directive('empCard', function(){
  return {
    restrict: 'EA',
    templateUrl: 'js/components/emp-card.html',
    scope: {
      employee: '=employee'
    },
    controller: function($scope){
      $scope.clicking = function(){
        alert($scope.employee.name);
      }
    }
  }
});
