const btn = document.getElementById("btn");
const results = document.getElementById("result");
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log("You can speak now");
};

recognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById("result").innerHTML = text;
};

recognition.onerror = function(event) {
    console.error("Speech recognition error detected: " + event.error);
    alert("An error occurred: " + event.error);
};

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // deselect
    alert("Copied the text!");
}
