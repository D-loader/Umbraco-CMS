/**
* @ngdoc directive
* @name umbraco.directives.directive:umbContentName 
* @restrict E
* @function
* @description 
* Used by editors that require naming an entity. Shows a textbox/headline with a required validator within it's own form.
**/
angular.module("umbraco.directives")
	.directive('umbContentName', function ($timeout) {
	    return {
	        require: "ngModel",
			restrict: 'E',
			replace: true,
			templateUrl: 'views/directives/umb-content-name.html',
			scope: {
			    placeholder: '@placeholder',
			    model: '=ngModel'
			},
			link: function(scope, element, attrs, ngModel) {

			    var inputElement = element.find("input");

				ngModel.$render = function(){
					$timeout(function(){
						if(!scope.model){
							scope.goEdit();
						}
					}, 100);
				};

				scope.goEdit = function(){
					scope.editMode = true;
					$timeout(function () {					    
					    inputElement.focus();					    
					}, 100);
				};

				scope.exitEdit = function(){
					scope.editMode = false;

                    //SD: I've removed this since I don't agree with it - but please enable if that's what you want.
					//if (!scope.model) {
					//    scope.model = "Empty...";
					//}
				};
			}
	    };
	});