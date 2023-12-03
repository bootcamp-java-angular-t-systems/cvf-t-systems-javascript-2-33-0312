document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    document.querySelector(".panel").addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-input")) {
            handleButtonClick(event.target.textContent);
        }
    });

    function handleButtonClick(value) {
        switch (value) {
            case "=":
                calculateResult();
                break;
            case "C":
                clearDisplay();
                break;
            case "CE":
                clearEntry();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    }

    function appendToDisplay(value) {
        display.textContent += value;
    }

    function clearDisplay() {
        display.textContent = "";
    }

    function clearEntry() {
        display.textContent = display.textContent.slice(0, -1);
    }

    function calculateResult() {
        const result = eval(display.textContent);
        display.textContent = result;
    }
});
