function insertNumber(number) {
    var existingNumber = $("#result").val()
    $("#result").val(existingNumber + number)

}


function clearResult() {
    $("#result").val("")


}

function claculate() {
    var finallyResult = eval($("#result").val())
    $("#result").val(finallyResult)
}



function deleteNumber() {
    var presentValue = $("#result").val()
    if (presentValue != "") {
        $("#ruselt").val(presentValue.slice(0, -1))
    }


}