var app = angular.module('MusicApp', ['MusicCtrls', 'ngRoute', 'd3', 'MusicDirectives']);

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
		}).when('/popular', {
			templateUrl: 'app/views/popular.html',
			controller: 'PopCtrl'
		})
		.otherwise({
			templateUrl: 'app/views/error.html'
		});

		$locationProvider.html5Mode(true);
}]);