angular
  .module('translateApp')
  .controller('LyricsShowController', LyricsShowController);

LyricsShowController.$inject = ['$http'];

function LyricsShowController($http) {
  var vm = this;

  vm.lyrics = [
    { lines: "All my friends are heathens, take it slow" },
    { lines: "Wait for them to ask you who you know" },
    { lines: "Please don't make any sudden moves" },
    { lines: "You don't know the half of the abuse" },
    { lines: "All my friends are heathens, take it slow" },
    { lines: "Wait for them to ask you who you know" },
    { lines: "Please don't make any sudden moves" },
    { lines: "You don't know the half of the abuse" },
    { lines: "Welcome to the room of people" },
    { lines: "Who have rooms of people that they loved one day" },
    { lines: "Docked away" },
    { lines: "Just because we check the guns at the door" },
    { lines: "Doesn't mean our brains will change from hand grenades" },
    { lines: "You're lovin' on the psychopath sitting next to you" },
    { lines: "You're lovin' on the murderer sitting next to you" },
    { lines: "You'll think, how'd I get here, sitting next to you?" },
    { lines: "But after all I've said, please don't forget" },
    { lines: "All my friends are heathens, take it slow" },
    { lines: "Wait for them to ask you who you know" },
    { lines: "Please don't make any sudden moves" },
    { lines: "You don't know the half of the abuse" },
    { lines: "We don't deal with outsiders very well" },
    { lines: "They say newcomers have a certain smell" },
    { lines: "Yeah, I trust issues, not to mention" },
    { lines: "They say they can smell your intentions" },
    { lines: "You're lovin' on the freakshow sitting next to you" },
    { lines: "You'll have some weird people sitting next to you" },
    { lines: "You'll think 'how did I get here, sitting next to you?'" },
    { lines: "But after all I've said, please don't forget" },
    { lines: "All my friends are heathens, take it slow" },
    { lines: "Wait for them to ask you who you know" },
    { lines: "Please don't make any sudden moves" },
    { lines: "You don't know the half of the abuse" },
    { lines: "All my friends are heathens, take it slow" },
    { lines: "Wait for them to ask you who you know" },
    { lines: "All my friends are heathens, take it slow" },
    { lines: "Wait for them to ask you who you know" },
    { lines: "Why'd you come, you knew you should have stayed" },
    { lines: "I tried to warn you just to stay away" },
    { lines: "And now they're outside ready to bust" },
    { lines: "It looks like you might be one of us" }
  ];
    // { lines: "Early in the morning, risin' to the street"},
    // { lines: "Light me up that cigarette and I strap shoes on my feet"},
    // { lines: "Got to find a reason, a reason things went wrong"},
    // { lines: "Got to find a reason why my money's all gone"},
    // { lines: "I got a dalmatian, and I can still get high"},
    // { lines: "I can play the guitar like a motherfucking riot"},
    // { lines: "Well, life is too short, so love the one you got"},
    // { lines: "'Cause you might get run over or you might get shot"},
    // { lines: "Never start no static I just get it off my chest"},
    // { lines: "Never had to battle with no bulletproof vest"},
    // { lines: "Take a small example, take a tip from me"},
    // { lines: "Take all of your money, give it all to charity"},
    // { lines: "Love is what I got"},
    // { lines: "It's within my reach"},
    // { lines: "And the Sublime style's still straight from Long Beach"},
    // { lines: "It all comes back to you, you'll finally get what you deserve"},
    // { lines: "Try and test that you're bound to get served"},
    // { lines: "Love's what I got"},
    // { lines: "Don't start a riot"}
  vm.translated = [
    { lines: "Todos mis amigos son paganos, tómalo despacio" },
    { lines: "Espere a que le pregunten quién sabe" },
    { lines: "Por favor, no haga movimientos repentinos" },
    { lines: "No sabes la mitad del abuso" },
    { lines: "Todos mis amigos son paganos, tómalo despacio" },
    { lines: "Espere a que le pregunten quién sabe" },
    { lines: "Por favor, no haga movimientos repentinos" },
    { lines: "No sabes la mitad del abuso" },
    { lines: "Bienvenido a la sala de personas" },
    { lines: "Quiénes tienen habitaciones de personas que amaron un día" },
    { lines: "Atrapado" },
    { lines: "Sólo porque revisamos las armas en la puerta" },
    { lines: "No significa que nuestro cerebro cambiará de granadas de mano" },
    { lines: "Estás amando al psicópata sentado a tu lado" },
    { lines: "Estás amando al asesino sentado a tu lado" },
    { lines: "Pensarás, ¿cómo he llegado aquí, sentado a tu lado?" },
    { lines: "Pero después de todo lo que he dicho, por favor no lo olvide" },
    { lines: "Todos mis amigos son paganos, tómalo despacio" },
    { lines: "Espere a que le pregunten quién sabe" },
    { lines: "Por favor, no haga movimientos repentinos" },
    { lines: "No sabes la mitad del abuso" },
    { lines: "No tratamos muy bien a los forasteros" },
    { lines: "Dicen que los recién llegados tienen cierto olor" },
    { lines: "Sí, confío en los problemas, por no mencionar" },
    { lines: "Dicen que pueden oler sus intenciones" },
    { lines: "Estás adorando en el show de monstruos sentado a tu lado" },
    { lines: "Tendrás a algunas personas extrañas sentadas a tu lado" },
    { lines: "Pensarás '¿cómo llegué aquí, sentado a tu lado?'" },
    { lines: "Pero después de todo lo que he dicho, por favor no lo olvide" },
    { lines: "Todos mis amigos son paganos, tómalo despacio" },
    { lines: "Espere a que le pregunten quién sabe" },
    { lines: "Por favor, no haga movimientos repentinos" },
    { lines: "No sabes la mitad del abuso" },
    { lines: "Todos mis amigos son paganos, tómalo despacio" },
    { lines: "Espere a que le pregunten quién sabe" },
    { lines: "Todos mis amigos son paganos, tómalo despacio" },
    { lines: "Espere a que le pregunten quién sabe" },
    { lines: "¿Por qué viniste, sabías que deberías haberte quedado?" },
    { lines: "Traté de advertirte para que te mantengas alejado" },
    { lines: "Y ahora están afuera listos para estallar" },
    { lines: "Parece que podrías ser uno de nosotros" }
  ];

  // { lines: "Temprano en la manana, subiendo a la calle" },
  // { lines: "Enciendeme ese cigarrillo y me pongo los zapatos en los pies" },
  // { lines: "Tengo que encontrar una razon, una razon por la que las cosas salieron mal" },
  // { lines: "Tengo que encontrar una razon por la que mi dinero se ha ido todo" },
  // { lines: "Tengo un dalmatian, y todavia puedo obtener alta" },
  // { lines: "Puedo tocar la guitarra como un motin de puta madre" },






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
