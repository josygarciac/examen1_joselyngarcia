/**
 * transaccion view controller
 */
(function() {
  'use strict';

/* transaccion Controller */
angular
  .module('myBank')
  .controller('TransaccionController', transaccionController);

  function transaccionController(TransaccionesService){
    var transaccion = this;

    /**
     * Add new accounts using TransaccionesService
     */
    function add() {
      var newTransaccion = angular.copy(transaccion.editedTransaccion); 
      TransaccionesService.add(newTransaccion);
      // Refreshing the state of the constructor
      transaccion.resetForm(); 
      console.log(transaccion.editedTransaccion);
    };

    /**
     * Remove one account from the list using TransaccionesService
     * @param type : INT, id
     */
    function remove(id) {
      TransaccionesService.remove(id);
    };

    /**
     * Canceling the update and reseting the form
     */
    function updateCancel() {
      transaccion.resetForm();
    };

    /**
     * Function to reset currenttransaccion and editedTransaccion and form
     */
    function resetForm() {
      transaccion.currenttransaccion = null;
      transaccion.editedTransaccion = {};
      transaccion.Form.$setPristine(); //Back to pristine state (original state)
      transaccion.Form.$setUntouched(); //Untouched state
    };

     /**
     * Function to set an instance of the current selected object
      @param type : INT, id
     */
    function setCurrentTransaccion(id) {
      transaccion.currenttransaccion = transaccion.transacciones[id];
      transaccion.editedTransaccion = angular.copy(transaccion.editedTransaccion);
    };

    /**
     * Function to update the data of an object
     */
    function updateTransaccion() {
      var fields = ['idCuenta', 'monto', 'detalle', 'id'];

      fields.forEach(function(field) {
        transaccion.currenttransaccion[field] = transaccion.editedTransaccion[field];  //Copying the values from editedTransaccion to currenttransaccion
      });
      transaccion.resetForm();
    };

    function init(){
      // Initializing methods
      transaccion.add = add;
      transaccion.remove = remove;
      transaccion.resetForm = resetForm;
      transaccion.setCurrentTransaccion = setCurrentTransaccion;
      transaccion.updateCancel = updateCancel;
      transaccion.updateTransaccion = updateTransaccion;

      // Initializing properties
      transaccion.currentTransaccion = null; /*Store a reference to the currently selected transaccion*/
      transaccion.editedTransaccion = {}; /*Store a reference of the currently selected transaccion*/
      
      //My array of transacciones from the service
      transaccion.transacciones = TransaccionesService.getAll();
    }

    transaccion.init = init();
  }
  

})();