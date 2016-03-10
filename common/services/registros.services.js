/**
 * Duties view services
 */

angular
  .module('myBank')
  .factory('RegistroService', registroService);

  function registroService($localStorage) {
    //Initialize of localstorage defaults
    $localStorage = $localStorage.$default({
      registros: [],
      id: 0
    });
    
    //Array of our data
    var registros = $localStorage.registros; 
    var monedas = ['Colones', 'Dólares'];
    var tipos = ['Corriente', 'Ahorros'];

    /*
    * Increase id and push the new account
    * @param type: {}, account
    */
    function add(registro) {
      registro.id = $localStorage.id++;
      registros.push(registro);
    }
     /*
    * Return data from local storage
    */
    function getAll() {
      return registros;
    }
    /*
    *Get a registro from array by id
    *@param type: INT, id
    */
    function getOne(id) {
        for (i in registros) {
            if (registros[i].id == id) {
                return registros[i];
            }
        }
    }
    /*
    *Remove a registro through id
    *@param type: INT, id
    */
    function remove(id) {
      for (i in registros) {
          if (registros[i].id == id) {
              registros.splice(i, 1);
          }
      }
    }

    return{
      registros: registros,
      add: add,
      getAll: getAll,
      getOne: getOne,
      monedas: monedas,
      tipos: tipos,
      remove: remove
    }
  }/* / Directive */
