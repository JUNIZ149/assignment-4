
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var hs = window.helloSpeaker;

    for ( var i= 0; i<names.length ; i++)
    {
      var firstLetter = names[i].charAt(0);
      if (firstLetter === 'j' || firstLetter === 'J') {
        byeSpeaker.speak(names[i]);
      } else { 
        hs.speak(names[i]);
      }
     }