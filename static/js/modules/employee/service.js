var modulo = angular.module('rh');

modulo.factory('rhManager', function(){

	var employees = [];

	var save = function(emp){
		if(emp.id){
			return update(emp);
		} else {
			return add(emp);
		}
	};

	var add = function(emp){
		emp.id = Math.floor((Math.random() * 10) + 1);
		emp.status = 'active';
		employees.push(emp);
		return emp;
	}

	var update = function(emp){
		var found = find(emp.id);
		found.name = emp.name;
		found.age = emp.age;
		found.job = emp.job;
		return found;
	};

	var find = function(id){
		var found = employees.find(function(obj){
			return obj.id == id;
		});
		return found;
	};

	var fire = function(id){
		var found = find(id);
		found.status = 'fired';
		return found;
	};

	var listEmployees = function(){
		return angular.copy(employees).filter(function(obj){
			return obj.status == 'active';
		});
	};

	var listFireds = function(){
		return angular.copy(employees).filter(function(obj){
			return obj.status == 'fired';
		});
	};

	return {
		save: save,
		find:find,
		fire:fire,
		listEmployees: listEmployees,
		listFireds: listFireds
	};

});
