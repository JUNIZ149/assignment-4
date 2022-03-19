

(  function helloSpeaker() { 
    var speakWord = "Hello ";
    var helloSpeaker = {};
    helloSpeaker.speak =  function (name) {
      console.log(speakWord + " " + name);
    }
    this.helloSpeaker = helloSpeaker;
   
 })(window);
