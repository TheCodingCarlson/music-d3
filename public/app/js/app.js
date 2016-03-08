var app = angular.module('MusicApp', ['ngRoute']);

app.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/views/music.html',
			controller: 
		})
}])