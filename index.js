
/* Section 1: Modal Code
*/
var hiddenClasses = document.getElementsByClassName('hidden')
var aboutPage = document.getElementById("information")
aboutPage.addEventListener("click", function () {

    hiddenClasses[0].style.display = "block"
    hiddenClasses[1].style.display = "block"

})


var Chart1 = document.getElementById("Chart1")
Chart1.addEventListener("click", function () {

    hiddenClasses[0].style.display = "block"
    hiddenClasses[2].style.display = "block"

})

function modalCloser() {

    hiddenClasses[0].style.display = "none"
    hiddenClasses[1].style.display = "none"
    hiddenClasses[2].style.display = "none"
}



var XButton = document.getElementById("modal-close")
XButton.addEventListener("click", function () {

    modalCloser()

})

var XButton2 = document.getElementById("modal-close-2")
XButton2.addEventListener("click", function () {

    modalCloser()

})

/* Section 2: Input to Output
*/

var convert = document.getElementById("convert")
convert.addEventListener("click", function () {

    var Input = document.getElementById("iii")
    console.log("ANS:", Input.value)

    var Output = document.getElementById("ooo")
    Output.value = Input.value
    

})

var reset = document.getElementById("reset")
reset.addEventListener("click", function () {

    var Input = document.getElementById("iii")
    Input.value = ""

    var Output = document.getElementById("ooo")
    Output.value = ""   
})