var modulo = angular.module('rh');

modulo.controller('EmployeesController', function($scope, rhManager){

	$scope.loadEmployees = function(){
		$scope.employees = rhManager.listEmployees();
		$scope.firedEmployees = rhManager.listFireds();
	};

	$scope.fire = function(id){
		rhManager.fire(id);
		$scope.loadEmployees();
	};

	$scope.loadEmployees();

});

modulo.controller('EmployeeController',
function($scope, rhManager, $location, $routeParams){

	var employeeId = $routeParams.id;

	if(employeeId) {
		$scope.employee = rhManager.find(employeeId);
	} else {
		$scope.employee = {};
	}

	$scope.save = function(employee){
		rhManager.save(employee);
		$location.path('/employees');
	};
	$scope.update = function(employee){
		rhManager.save(employee);
		$location.path('/employees');
	};

});
