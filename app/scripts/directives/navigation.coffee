'use strict'

angular.module('PersonalWebsiteAngularApp')
  .directive('navigation', () ->
    restrict: 'E'
    templateUrl: 'views/navigation.html'
	link: (scope, elem, attrs, ctrl) ->
  )