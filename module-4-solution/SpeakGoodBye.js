// pulled out all the instructions to make reading
// easier :)

(function (window) {
 var byeSpeaker = {};
 byeSpeaker.speak = function (names) {
   console.log(speakWord + " " + names);
 }

window.byeSpeaker = byeSpeaker;

var speakWord = "Good Bye";

 })(window);
