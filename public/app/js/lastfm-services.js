angular.module('LastFmServices', ['ngResource'])
	.factory('Albums',['$resource', function($resource) {
		return $resource('/api/search/');
	}])
	.factory('Artists',['$resource', function($resource) {
		return $resource('/api/artists/');
	}])
	.factory('Tracks',['$resource', function($resource) {
		return $resource('/api/tracks/');
	}]);