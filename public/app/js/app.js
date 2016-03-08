var app = angular.module('MusicApp', ['MusicCtrls', 'ngRoute', 'd3']);

app.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/views/music.html',
			controller: 'SearchCtrl' 
		})
		.when('/history', {
			templateUrl: 'app/views/history.html',
			controller: 'HistoryCtrl'
		})
		.otherwise({
			templateUrl: 'app/views/error.html'
		});

		$locationProvider.html5Mode(true);
}]);