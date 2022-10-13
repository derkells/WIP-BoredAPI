//Reset button. Resets the output
function resetOutput() {
    document.getElementById("output").innerHTML = "";
    document.querySelector("#education").checked = false;
    document.querySelector("#recreational").checked = false;
    document.querySelector("#social").checked = false;
    document.querySelector("#diy").checked = false;
    document.querySelector("#charity").checked = false;
    document.querySelector("#cooking").checked = false;
    document.querySelector("#relaxation").checked = false;
    document.querySelector("#music").checked = false;
    document.querySelector("#busywork").checked = false;

}

//Calls API and returns the json package for Random Activity
const getRandomActivity = async () => {
    let response = String
    const APIResponse = await fetch('http://www.boredapi.com/api/activity/');
    const givenResponse = await APIResponse.json();
    response = givenResponse.activity

    document.getElementById("output").innerHTML = response
}

function sliderTest() {
    var test1 = parseInt(document.getElementById("firstSlider").value)
    console.log(test1)
    return test1
}

const checkBoxes = async() => {

    let response1 = String
    let APIAddress = `http://www.boredapi.com/api/activity?participants=${sliderTest()}`



    if (document.querySelector("#education").checked) {
        var education = "&type=education"
        APIAddress = APIAddress.concat(education)
    }
    if (document.querySelector("#recreational").checked) {
        var recreational = "&type=recreational"
        APIAddress = APIAddress.concat(recreational)
    }
    if (document.querySelector('#social').checked) {
        var social = "&type=social"
        APIAddress = APIAddress.concat(social)
    }
    if (document.querySelector('#diy').checked) {
        var diy = "&type=diy"
        APIAddress = APIAddress.concat(diy)
    }
    if (document.querySelector('#charity').checked) {
        var charity = "&type=charity"
        APIAddress = APIAddress.concat(charity)
    }
    if (document.querySelector('#cooking').checked) {
        var cooking = "&type=cooking"
        APIAddress = APIAddress.concat(cooking)
    }
    if (document.querySelector('#relaxation').checked) {
        var relaxation = "&type=relaxation"
        APIAddress = APIAddress.concat(relaxation)
    }
    if (document.querySelector('#music').checked) {
        var music = "&type=music"
        APIAddress = APIAddress.concat(music)
    }
    if (document.querySelector('#busywork').checked) {
        var busywork = "&type=busywork"
        APIAddress = APIAddress.concat(busywork)
    }

    const APIResponse1 = await fetch(APIAddress)
    const givenResponse1 = await APIResponse1.json()
    response1 = givenResponse1.activity

    if (response1 == undefined) {
        response1 = "No results found"
    }

    document.getElementById("output").innerHTML = response1
    console.log(givenResponse1.type)
    console.log(APIAddress)

    }
    //Problems I've had to solve:
    //Connecting the API: had to learn fetch/await
    //concatonating the APIAddress
    //When selecting multiple and deselecting it returned undefined
