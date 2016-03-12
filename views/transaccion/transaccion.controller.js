/**
 * Transacción view controller
 */
(function() {
  'use strict';

/* Transacción Controller */
angular
  .module('myBank')
  .controller('TransaccionController', TransaccionController);

  function TransaccionController(TransaccionService, $stateParams) {
    var especifico = this;
    /**
     * Get one específico by ID from the list using TransaccionService
     * @param type : INT, id
     */
    function showOne(id) {
      return TransaccionService.getOne(id);
    }
    
    /**
     * Initialization function
     */
    function init(){
      //Current específico
      especifico.actualEspecifico = showOne($stateParams.id);
    }
    
    especifico.init = init();
  }/* / Transacción Controller */

})();
