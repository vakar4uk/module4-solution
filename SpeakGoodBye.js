var byeSpeaker = {};

(function () {   
    var speakWord = "Good Bye";   
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    } 
})();

