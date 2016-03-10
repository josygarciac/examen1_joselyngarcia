/**
 * Registro view controller
 */
(function() {
  'use strict';

/* Registro Controller */
angular
  .module('myBank')
  .controller('RegistroController', registroController);

  function registroController(RegistroService){
    var registro = this;

    /**
     * Add new accounts using RegistroService
     */
    function add() {
      var newRegistro = angular.copy(registro.editedRegistro); 
      RegistroService.add(newRegistro);
      // Refreshing the state of the constructor
      registro.resetForm(); 
      console.log(registro.editedRegistro);
    };

    /**
     * Remove one account from the list using RegistroService
     * @param type : INT, id
     */
    function remove(id) {
      RegistroService.remove(id);
    };

    /**
     * Canceling the update and reseting the form
     */
    function updateCancel() {
      registro.resetForm();
    };

    /**
     * Function to reset currentRegistro and editedRegistro and form
     */
    function resetForm() {
      registro.currentRegistro = null;
      registro.editedRegistro = {};
      registro.Form.$setPristine(); //Back to pristine state (original state)
      registro.Form.$setUntouched(); //Untouched state
    };

     /**
     * Function to set an instance of the current selected object
      @param type : INT, id
     */
    function setCurrentRegistro(id) {
      registro.currentRegistro = registro.registros[id];
      registro.editedRegistro = angular.copy(registro.editedRegistro);
    };

    /**
     * Function to update the data of an object
     */
    function updateRegistro() {
      var fields = ['dueno', 'moneda', 'tipo', 'id'];

      fields.forEach(function(field) {
        registro.currentRegistro[field] = registro.editedRegistro[field];  //Copying the values from editedRegistro to currentRegistro
      });
      registro.resetForm();
    };

    function init(){
    	// Initializing methods
      registro.add = add;
      registro.remove = remove;
      registro.resetForm = resetForm;
      registro.setCurrentRegistro = setCurrentRegistro;
      registro.updateCancel = updateCancel;
      registro.updateRegistro = updateRegistro;

      // Initializing properties
      registro.currentRegistro = null; /*Store a reference to the currently selected registro*/
      registro.editedRegistro = {}; /*Store a reference of the currently selected registro*/
      
      //My array of monedas from the service
      registro.monedas = RegistroService.monedas;
      //My array of tipos from the service
      registro.tipos = RegistroService.tipos;
      //My array of registros from the service
      registro.registros = RegistroService.getAll();
    }

    registro.init = init();
  }
  

})();