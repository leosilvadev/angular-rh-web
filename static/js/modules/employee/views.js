angular.module('rh').config(function($routeProvider){

	$routeProvider

	.when('/employees', {
		templateUrl: 'js/modules/employee/views/list.html',
		controller: 'EmployeesController'
	})

	.when('/employees/new', {
		templateUrl: 'js/modules/employee/views/employee.html',
		controller: 'EmployeeController'
	})

	.when('/employees/edit/:id', {
		templateUrl: 'js/modules/employee/views/employee.html',
		controller: 'EmployeeController'
	})

	.otherwise({
		redirectTo: '/employees'
	});

});
