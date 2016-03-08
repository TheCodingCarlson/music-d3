angular.module('MusicApp.directives', ['d3'])
.directive('barChart', ['d3Service', function(d3Service) {
	return {
		link: function(scope, element, attrs) {
			d3Service.d3().then(function(d3) {

			});
		}
	}
}]);