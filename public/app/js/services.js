angular.module('D3Services', ['ngResource'])
	.factory('d3', ['$document', '$q', '$rootScope', 
		function($document, $q, $rootScope) {
			var deferred = $q.defer();

			function onScriptLoad() {
				$rootScope.$apply(function() { 
					deferred.resolve(window.d3); });
				}

			var scriptTag = $document[0].createElement('script');
			scriptTag.type = 'text/javascript';
			scriptTag.async = true;
			scriptTag.src = 'http://d3js.org/d3.v3.min.js';
			scriptTag.onreadystatechange = function() {
				if(this.readyState === 'complete') {
					onScriptLoad();
				}
			};

			scriptTag.onload = onScriptLoad;

			var body = $document[0].getElementsByTagName('body')[0];
			body.appendChild(scriptTag);

			return { 
				d3: function() {
					return deferred.promise;
			}
		};
	}])
	.factory('Word', ['$resource', function($resource) {
		return $resource('/api/words');
	}]);