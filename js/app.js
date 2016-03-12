(function() {
  'use strict';

  angular /*Setter*/
    .module('myBank', ['ui.router','ngStorage'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('PrincipalCtrl', PrincipalCtrl);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/registro/registro.view.html',
        controller: 'RegistroController',
        controllerAs: 'registro'
      })
      .state('detalle', {
        url: '/detalle/:id',
        templateUrl: 'views/detalle/detalle.view.html',
        controller: 'DetalleController',
        controllerAs: 'detalle'
      })
      .state('crear', {
        url: '/crear/:id',
        templateUrl: 'views/crear/crear.view.html',
        controller: 'CrearController',
        controllerAs: 'crear'
      })
      .state('transaccion', {
        url: '/transaccion/:id',
        templateUrl: 'views/transaccion/transaccion.view.html',
        controller: 'TransaccionController',
        controllerAs: 'transaccion'
      });
      
      $urlRouterProvider.otherwise('/');
  }

  function PrincipalCtrl() {
    
  }
})();