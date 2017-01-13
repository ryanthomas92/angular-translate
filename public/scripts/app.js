angular
  .module('translateApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/something',
      controllerAs: 'songIndexCtrl',
      controller: 'SongIndexController'
    })
    // .when('/albums/:id', {
    //   templateUrl: '/templates/albums-show',
    //   controllerAs: 'albumsShowCtrl',
    //   controller: 'AlbumsShowController'
    // })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
