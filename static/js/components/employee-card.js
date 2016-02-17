var componentsModule = angular.module('rh.components', []);

componentsModule.directive('employeeCard', function(){
  return {
    restrict: 'EA',
    templateUrl: 'js/components/employee-card.html',
    replace:true,
    scope:{
      url:'@url',
      title:'@title'
    }
  }
});
