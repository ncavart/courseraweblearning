// pulled out all the instructions to make reading
// easier :)

(function (window) {
var helloSpeaker = {};
// speak function attached
helloSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
// expose to global scope
window.helloSpeaker = helloSpeaker;
// speak word variable
speakWord
var speakWord = "Hello";

})(window);
