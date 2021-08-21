var inputText = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output-text");

const serverUrl = "https://api.funtranslations.com/translate/morse.json"
// const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// console.log(btnTranslate);
// console.log(outputText);


function generateUrl(inputText) {
    var convertedUrl = serverUrl + "?text=" + inputText;
    return convertedUrl;
}

function errorHandler(error) {
    alert("Sorry! Some issue with server...try again after sometime");
}

function translateToMorse() {

    fetch(generateUrl(inputText.value))
        .then(response => response.json())
        .then(json => {
            outputText.innerHTML = json.contents.translated
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", translateToMorse);