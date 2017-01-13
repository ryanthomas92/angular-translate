angular
  .module('translateApp')
  .controller('LyricsShowController', LyricsShowController);

LyricsShowController.$inject = ['$http'];

function LyricsShowController($http) {
  var vm = this;
  vm.newSong = {};

  vm.song = {
    albumName: "2001",
    artistName: "dr. dre"
  }
  // $http({
  //   method: 'GET',
  //   url: '/api.genius.com/songs'
  // }).then(function successCallback(response) {
  //   //vm.songs = response.data;
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });

}
