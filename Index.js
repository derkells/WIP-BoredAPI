//Reset button. Resets the output
function resetOutput() {
    document.getElementById("output").innerHTML = ""
}

//Calls API and returns the json package for Random Activity
const getRandomActivity = async () => {
    let response = String
    const APIResponse = await fetch('http://www.boredapi.com/api/activity/');
    const givenResponse = await APIResponse.json();
    response = givenResponse.activity

    document.getElementById("output").innerHTML = response
}
//Calls API and returns json package for the application
const getSpecificActivity = async () => {
    let response1 = String
    let APIAddress = `http://www.boredapi.com/api/activity?participants=${sliderTest()}`
    const APIResponse1 = await fetch(APIAddress)
    const givenResponse1 = await APIResponse1.json()
    response1 = givenResponse1.activity

    document.getElementById("output").innerHTML = response1
}

function sliderTest() {
    var test1 = parseInt(document.getElementById("firstSlider").value)
    console.log(test1)
    return test1
}

