angular.module('MusicCtrls', [])
.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.searchMusic = function(term) {
		$http({
			url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + term + '&api_key=66d584518050d6a47dc9f9eedefd2a5c&format=json',
			method: 'GET'
		}).then(function(res) {
			if(res.status === 200) {
				$scope.albums = res.data.topalbums.album;
				$scope.name = $scope.albums[0].artist.name;
				console.log($scope.albums);
				console.log(res.data);
			}
		}, function(res) {
			console.log(res);
		});

		$scope.searchTerm = '';
	}
}]).controller('HistoryCtrl', ['$scope', function($scope) {

}]);