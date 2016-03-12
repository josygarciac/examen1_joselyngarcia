/**
 * Transaction table directive definition
 */
(function() {
 	'use strict';

/* Directive */
angular
	.module('myBank')
	.directive('transactionTable', transactionTable);

	function transactionTable() {
		function transactionTableCtrl(){ 
			
		}
	
		return{
			restrict: 'A',
			templateUrl: 'common/directivas/transaction-table/transaction-table.tpl.html',
			controller: transactionTableCtrl,
			controllerAs: 'ctrl'
		};
	}/* / Directive */

})();