/**
 * Transacciones view services
 */

angular
  .module('myBank')
  .factory('TransaccionService', transaccionService);

  function transaccionService($localStorage) {
    //Initialize of localstorage defaults
    $localStorage = $localStorage.$default({
      transacciones: [],
      idCuenta: 0,
      id: 0
    });
    
    //Array of our data
    var transacciones = $localStorage.transacciones; 

    /*
    * Increase id and push the new transaction
    * @param type: {}, transaction
    */
    function add(transaccion) {
      transaccion.id = $localStorage.id++;
      transacciones.push(transaccion);
    }
     /*
    * Return data from local storage
    */
    function getAll() {
      return transacciones;
    }
    /*
    *Get a transaccion from array by id
    *@param type: INT, id
    */
    function getOne(id) {
        for (i in transacciones) {
            if (transacciones[i].id == id) {
                return transacciones[i];
            }
        }
    }
    /*
    *Remove a transaccion through id
    *@param type: INT, id
    */
    function remove(id) {
      for (i in transacciones) {
          if (transacciones[i].id == id) {
              transacciones.splice(i, 1);
          }
      }
    }

    return{
      transacciones: transacciones,
      add: add,
      getAll: getAll,
      getOne: getOne,
      remove: remove
    }
  }/* / Directive */
