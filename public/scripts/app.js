angular
  .module('translateApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/songs',
      controllerAs: 'songIndexCtrl',
      controller: 'SongIndexController'
    })
    .when('/lyrics', {
      templateUrl: '/templates/lyrics',
      controllerAs: 'lyricsShowCtrl',
      controller: 'LyricsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
