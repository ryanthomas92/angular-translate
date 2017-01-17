angular
  .module('translateApp')
  .controller('SongIndexController', SongIndexController);

SongIndexController.$inject = ['$http'];

function SongIndexController($http) {
  var vm = this;
  //var songId = $routeParams.id;
   vm.songs = [
    {
      title: 'What I Got',
      artist:'Sublime'
    },
    {
      title: 'Bad and Boujee',
      artist:'Migos'
    },
    {
      title: 'Black Beatles',
      artist:'Rae Sremmurd'
    },
    {
      title: 'Closer',
      artist:'The Chainsmokers'
    },
    {
      title: 'Starboy',
      artist:'The Weeknd'
    },
    {
      title: '24K Magic',
      artist:'Bruno Mars'
    },
    {
      title: 'Side To Side',
      artist:'Ariana Grande'
    },
    {
      title: 'Fake Love',
      artist:'Drake'
    },
    {
      title: 'Bad Things',
      artist:'Machine Gun Kelly'
    },
    {
      title: 'Heathens',
      artist:'Twenty One Pilots'
    }
  ];
  vm.songsTwo = [
   {
     title: 'Broccoli',
     artist:'D.R.A.M'
   },
   {
     title: 'Caroline',
     artist:'Amine'
   },
   {
     title: 'Bounce Back',
     artist:'Big Sean'
   },
   {
     title: 'Mercy',
     artist:'Shawn Mendes'
   },
   {
     title: 'Cant Stop The Feeling',
     artist:'Justin Timberlake'
   },
   {
     title: 'Love on the Brain',
     artist:'Rihanna'
   },
   {
     title: 'All Time Low',
     artist:'Jon Bellion'
   },
   {
     title: 'Treat You Better',
     artist:'Shawn Mendes'
   },
   {
     title: 'OOOUUU',
     artist:'Young M.A.'
   },
   {
     title: 'I Feel It Coming',
     artist:'The Weeknd'
   }
 ];

  vm.newSong = {};

  // vm.song = {
  //   songName: "What I Got"
  // }
  // $http({
  //   method: 'GET',
  //   url: 'https://api.genius.com/songs'
  // }).then(function successCallback(response) {
  //   console.log(response)
  //   vm.songs = response.data;
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });

}
