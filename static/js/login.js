angular.module('login', [])
.controller('LoginController', ['$scope', '$http',
function($scope, $http) {
	$scope.email = 'example@email.com';
	$scope.pass = 'blah';
	$scope.login = function(email) {
		console.log('sending ' + $scope.email);
		$http({
			url: 'http://localhost:3000/login/post',
			method: 'POST',
			data: { "email": $scope.email, "pass": $scope.pass },
			headers: {'Content-Type': 'application/json'}
			// headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function(data) {
			window.location = '/home'; })
	}
}]);