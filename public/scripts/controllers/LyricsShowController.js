angular
  .module('translateApp')
  .controller('LyricsShowController', LyricsShowController);

LyricsShowController.$inject = ['$http'];

function LyricsShowController($http) {
  var vm = this;

  vm.lyrics = [
    {
      lines: "Early in the morning, risin' to the street"
    },
    {
      lines: "Light me up that cigarette and I strap shoes on my feet"
    },
    {
      lines: "Got to find a reason, a reason things went wrong"
    },
    {
      lines: "Got to find a reason why my money's all gone"
    },
    {
      lines: "I got a dalmatian, and I can still get high"
    },
    {
      lines: "I can play the guitar like a motherfucking riot"
    },
    {
      lines: "Well, life is too short, so love the one you got"
    },
    {
      lines: "'Cause you might get run over or you might get shot"
    },
    {
      lines: "Never start no static I just get it off my chest"
    },
    {
      lines: "Never had to battle with no bulletproof vest"
    },
    {
      lines: "Take a small example, take a tip from me"
    },
    {
      lines: "Take all of your money, give it all to charity"
    },
    {
      lines: "Love is what I got"
    },
    {
      lines: "It's within my reach"
    },
    {
      lines: "And the Sublime style's still straight from Long Beach"
    },
    {
      lines: "It all comes back to you, you'll finally get what you deserve"
    },
    {
      lines: "Try and test that you're bound to get served"
    },
    {
      lines: "Love's what I got"
    },
    {
      lines: "Don't start a riot"
    }
  ]


  vm.newLyrics = {};


  // $http({
  //   method: 'GET',
  //   url: '/api.genius.com/songs'
  // }).then(function successCallback(response) {
  //   //vm.songs = response.data;
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });

}
