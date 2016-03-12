angular.module('MusicCtrls', ['D3Services', 'D3Directives'])
.controller('SearchCtrl', ['Word', '$scope', '$http', function(Word, $scope, $http) {

	$scope.searchMusic = function(term) {

		var params = {
 				word: $scope.searchTerm,
 				value: 1
 			} ;

 			var newWord = new Word(params);
 			newWord.$save();
 			console.log(newWord);
		$http({
			url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + term + '&api_key=66d584518050d6a47dc9f9eedefd2a5c&format=json',
			method: 'GET'
		}).then(function(res) {
			if(res.status === 200) {
				$scope.albums = res.data.topalbums.album;
				$scope.name = $scope.albums[0].artist.name;
			}

			$scope.d3BarChartData = [
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
}])
.controller('PopCtrl', ['$scope', '$http', function($scope, $http) {
	$http({
		url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=66d584518050d6a47dc9f9eedefd2a5c&format=json',
		method: 'GET'
	}).then(function(res) {
		if(res.status === 200) {
			$scope.artists = res.data.artists.artist;
			console.log($scope.artists[0].playcount);
		}

		$scope.d3BubbleCloudData = [
				{name: $scope.artists[0].name, value: $scope.artists[0].playcount},
				{name: $scope.artists[1].name, value: $scope.artists[1].playcount},
				{name: $scope.artists[2].name, value: $scope.artists[2].playcount},
				{name: $scope.artists[3].name, value: $scope.artists[3].playcount},
				{name: $scope.artists[4].name, value: $scope.artists[4].playcount},
				{name: $scope.artists[5].name, value: $scope.artists[5].playcount},
				{name: $scope.artists[6].name, value: $scope.artists[6].playcount},
				{name: $scope.artists[7].name, value: $scope.artists[7].playcount},
				{name: $scope.artists[8].name, value: $scope.artists[8].playcount},
				{name: $scope.artists[9].name, value: $scope.artists[9].playcount}
 		];

		
	
	}, function(res) {
		console.log(res);
	});

}])
.controller('HistoryCtrl', ['$scope', 'Word', function($scope, Word) {
	$scope.words = [];
	Word.query(function success(data) {
		$scope.words = data;
	}, function error(data) {
		console.log('Error: ', data);
	});
}]);