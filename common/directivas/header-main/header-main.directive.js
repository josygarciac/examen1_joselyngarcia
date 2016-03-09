/**
 * Table Item directive definition
 */
(function() {
 	'use strict';

/* Directive */
angular
	.module('myBank')
	.directive('headerMain', headerMain);

	function headerMain() {
		function headerMainCtrl(){ 
			
		}
	
		return{
			restrict: 'E',
			templateUrl: 'common/directivas/header-main/header-main.tpl.html',
			controller: headerMainCtrl,
			controllerAs: 'ctrl'
		};
	}/* / Directive */

})();