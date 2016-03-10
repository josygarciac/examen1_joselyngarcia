/**
 * Table Item directive definition
 */
(function() {
 	'use strict';

/* Directive */
angular
	.module('myBank')
	.directive('menuMain', menuMain);

	function menuMain() {
		function menuMainCtrl(){ 
			
		}
	
		return{
			restrict: 'E',
			templateUrl: 'common/directivas/menu-main/menu-main.tpl.html',
			controller: menuMainCtrl,
			controllerAs: 'ctrl'
		};
	}/* / Directive */

})();