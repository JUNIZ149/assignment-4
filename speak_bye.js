(  function byeSpeaker() { 
  var speakWord = "Bye ";
  var byeSpeaker = {};
  byeSpeaker.speak =  function (name) {
    console.log(speakWord + " " + name);
  }
  this.byeSpeaker = byeSpeaker;
 
})(window);
