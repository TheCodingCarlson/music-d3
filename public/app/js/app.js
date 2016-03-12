var app = angular.module('MusicApp', ['MusicCtrls', 'ngRoute']);

app.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/views/music.html',
			controller: 'SearchCtrl' 
		})
		.when('/tracks', {
			templateUrl: 'app/views/tracks.html',
			controller: 'TrackCtrl'
		}).when('/artists', {
			templateUrl: 'app/views/artists.html',
			controller: 'ArtistCtrl'
		})
		.otherwise({
			templateUrl: 'app/views/error.html'
		});

		$locationProvider.html5Mode(true);
}]);