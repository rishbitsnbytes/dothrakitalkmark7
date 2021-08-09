var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output-txt");
var serverUrl = "https://api.funtranslations.com/translate/dothraki.json"



function translationUrl(input){
    return serverUrl + "?" + "text=" + input;
}



function errorhandler(error){
    console.log("Some Error Occured", error);
    alert("Server can fetch 5 request per hour, please try after an hour!");
}


function clickEventHandler() {
    var txtInput = inputTxt.value;
    
    fetch(translationUrl(txtInput))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputTxt.innerText = translatedTxt;
        })
    .catch(errorhandler);
}


btnTranslate.addEventListener("click", clickEventHandler)
