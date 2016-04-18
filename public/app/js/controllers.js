angular.module('MusicCtrls', ['LastFmServices', 'D3Services', 'D3Directives'])
.controller('SearchCtrl', ['$scope', '$http', 'Albums', function($scope, $http, Albums) {

	$scope.searchMusic = function(q) {

		Albums.get({q: q}, function(data) {
			if(data.error === 6) {
				$scope.name = data.message;
				$scope.d3BarChartData = [];
			} else {
				$scope.albums = data.topalbums.album;
				$scope.name = $scope.albums[0].artist.name;
				$scope.d3BarChartData = [];

				for(var i = 0; i < 10; i++) {
					var obj = {
						label: $scope.albums[i].name, 
						score: $scope.albums[i].playcount
					};

					$scope.d3BarChartData.push(obj);
				}
			}

			$scope.query = '';
		});
	}
}])
.controller('ArtistCtrl', ['$scope', '$http', 'Artists', function($scope, $http, Artists) {

	Artists.get(function(data) {

		$scope.artists = data.artists.artist;
		$scope.d3BubbleCloudData = [];

		for(var i = 0; i < 10; i++) {
			var obj = {
				name: $scope.artists[i].name, 
				value: $scope.artists[i].playcount
			};

			$scope.d3BubbleCloudData.push(obj);
		}
	});
}])
.controller('TrackCtrl', ['$scope', '$http', 'Tracks', function($scope, $http, Tracks) {

	Tracks.get(function(data) {

		$scope.tracks = data.tracks.track;
		$scope.d3PieChartData = [];

		for(var i = 0; i < 10; i++) {
			var obj = {
				label: $scope.tracks[i].artist.name + ' - ' + $scope.tracks[i].name,
				count: $scope.tracks[i].listeners};

				$scope.d3PieChartData.push(obj);
		}
	});
}]);