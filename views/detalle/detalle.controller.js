/**
 * Detalle view controller
 */
(function() {
  'use strict';

/* Detalle Controller */
angular
  .module('myBank')
  .controller('DetalleController', DetalleController);

  function DetalleController(RegistroService, $stateParams) {
    var detalle = this;
    /**
     * Get one registro by ID from the list using RegistroService
     * @param type : INT, id
     */
    function showOne(id) {
      return RegistroService.getOne(id);
    }
    
    /**
     * Initialization function
     */
    function init(){
      //Current registro
      detalle.actualRegistro = showOne($stateParams.id);
    }
    
    detalle.init = init();
  }/* / Detalle Controller */

})();
