function appendValue(value) {
    var result = document.getElementById("result");
    result.textContent += value;
}

function clearResult() {
    var result = document.getElementById("result");
    result.textContent = "";
}

function calculateResult() {
    var result = document.getElementById("result");
    var expression = result.textContent;

    try {
        result.textContent = eval(expression);
    } catch (error) {
        result.textContent = "Error";
    }
}
