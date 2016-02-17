var componentsModule =
  angular.module('rh.components', []);

componentsModule.directive('imgContainer', function(){
  return {
    restrict: 'EA',
    templateUrl: 'js/components/img-container.html',
    scope:{
      url:'@url',
      title:'@title'
    }
  }
});
