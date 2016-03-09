angular.module('MusicCtrls', ['D3Services', 'D3Directives'])
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

			}

			$scope.d3Data = [
				{label: $scope.albums[0].name, score: $scope.albums[0].playcount},
				{label: $scope.albums[1].name, score: $scope.albums[1].playcount},
				{label: $scope.albums[2].name, score: $scope.albums[2].playcount},
				{label: $scope.albums[3].name, score: $scope.albums[3].playcount},
				{label: $scope.albums[4].name, score: $scope.albums[4].playcount},
				{label: $scope.albums[5].name, score: $scope.albums[5].playcount},
				{label: $scope.albums[6].name, score: $scope.albums[6].playcount},
				{label: $scope.albums[7].name, score: $scope.albums[7].playcount},
				{label: $scope.albums[8].name, score: $scope.albums[8].playcount},
				{label: $scope.albums[9].name, score: $scope.albums[9].playcount}
 			];
			
		}, function(res) {
			console.log(res);
		});

		$scope.searchTerm = '';
	}
}]).controller('HistoryCtrl', ['$scope', function($scope) {

}]).controller('PopCtrl', ['$scope', '$http', function($scope, $http) {
	$http({
		url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=66d584518050d6a47dc9f9eedefd2a5c&format=json',
		method: 'GET'
	}).then(function(res) {
		if(res.status === 200) {
			$scope.artists = res.data.artists.artist;
			console.log($scope.artists);
		}
	}, function(res) {
		console.log(res);
	});

}]);