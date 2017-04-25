angular.module('regcon', [])
.controller('RegistrationController', ['$scope', '$http',
function($scope, $http) {
	$scope.email = 'example@email.com';
	$scope.pass = 'blah';
	$scope.register = function(email) {
		console.log('sending ' + $scope.email);
		$http({
			url: 'http://localhost:3000/register/post',
			method: 'POST',
			data: { "email": $scope.email, "pass": $scope.pass },
			headers: {'Content-Type': 'application/json'}
			// headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function(data) {
			window.location = '/home'; })
	}
}]);
