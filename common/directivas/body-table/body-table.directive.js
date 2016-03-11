/**
 * Body table directive definition
 */
(function() {
 	'use strict';

/* Directive */
angular
	.module('myBank')
	.directive('bodyTable', bodyTable);

	function bodyTable() {
		function bodyTableCtrl(){ 
			
		}
	
		return{
			restrict: 'A',
			templateUrl: 'common/directivas/body-table/body-table.tpl.html',
			controller: bodyTableCtrl,
			controllerAs: 'ctrl'
		};
	}/* / Directive */

})();