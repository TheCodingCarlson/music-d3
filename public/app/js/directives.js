angular.module('D3Directives', ['D3Services'])
.directive('d3Bars', ['d3', '$window', function(d3, $window) {
	return {
		restrict: 'EA',
		scope: {
			data: '='
		},
		link: function(scope, element, attrs) {
			d3.d3().then(function(d3) {
				var margin = parseInt(attrs.margin) || 20;
				var barHeight = parseInt(attrs.barHeight) || 30;
				var barPadding = parseInt(attrs.barPadding) || 5;

				var svg = d3.select(element[0])
					.append('svg')
					.style('width', '100%');

				window.onresize = function() {
					scope.$apply();
				};

          		scope.$watch(function() {
          			return angular.element($window)[0].innerWidth;
          		}, function() {
          			scope.render(scope.data);
          		});

          		scope.render = function(data) {
          			svg.selectAll('*').remove();

          			if(!data) return;

          			var width = d3.select(element[0]).node().offsetWidth - margin;
          			var height = scope.data.length * (barHeight + barPadding);
          			var color = d3.scale.category20();
          			var xScale = d3.scale.linear()
          				.domain([0, d3.max(data, function(d) {
          					return d.score
          				})])
          				.range([0, width]);

          			svg.attr('height', height);

          			svg.selectAll('rect')
          				.data(data).enter()
          				.append('rect')
          				.attr('height', barHeight)
          				.attr('width', 140)
          				.attr('x', Math.round(margin/2))
          				.attr('y', function(d,i) {
          					return i * (barHeight + barPadding);
          				})
          				.attr('fill', function(d) {
          					return color(d.score);
          				}).transition()
          					.duration(1000)
          					.attr('width', function(d) {
          						return xScale(d.score);
          					});

          			svg.selectAll('text')
          				.data(data).enter()
          				.append('text')
          				.attr('fill', '#fff')
          				.attr('y', function(d,i) {
          					return i * 35 + 22;
          				})
          				.attr('x', 15)
          				.text(function(d) {
          					return d.label + ' - ' + d.score.toString();
          				});
          		}

          		scope.$watch('data', function(newVals, oldVals) {
          			return scope.render(newVals);
          		}, true);

			});
		}
	}
}])
.directive('d3Bubble', ['d3', '$window', function(d3, $window) {
	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		link: function(scope, element, attrs) {
			d3.d3().then(function(d3) {
				var svg = d3.select(element[0])
					.append('svg')
					.style('width', '100%');

				window.onresize = function() {
					scope.$apply();
				};

				scope.$watch(function() {
					return angular.element($window)[0].innerWidth;
				}, function() {
					scope.render(scope.data);
				});

				scope.$watchCollection('data', function(newVals, oldVals) {
					scope.render(scope.data)
				});

				scope.render = function(data) {
					svg.selectAll('*').remove();

					if(!data) return;

					var parentWidth = svg.node().getBoundingClientRect().width;
					var diameter = parentWidth * 0.89;

					var bubble = d3.layout.pack()
						.sort(null)
						.size([diameter, diameter])
						.padding(15);

					svg.attr('width', diameter)
						.attr('height', diameter)
						.attr('class', 'bubble');

					// var node = svg.selectAll('.node')
				}


			})
		}
	}
}])