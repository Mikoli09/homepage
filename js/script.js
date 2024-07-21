console.log("Cześć");

let body = document.querySelector("body");
let backgroundChangeButton_Element = document.querySelector(".js-backgroundChangeButton");

let amountText = document.getElementById("amountText");
let amount = 0;
let verifyButton_Element = document.querySelector(".js-verifyButton");

let tab = [
    document.getElementById("Status1"), //0
    document.getElementById("Status2"), //1
    document.getElementById("Status3"), //2
    document.getElementById("Status4"), //3
    document.getElementById("Status5"), //4
    document.getElementById("Status6"), //5
    document.getElementById("Status7") //6
];


// Switch background color by button and change button inner text
backgroundChangeButton_Element.addEventListener("click", () => {

    body.classList.toggle("body--darkMode")
    backgroundChangeButton_Element.innerText = body.classList.contains("body--darkMode") ?
        "Wyłącz ciemne tło" : "Włącz ciemne tło";

});

// Checkbox check
tab.forEach(function (StatusX) {
    StatusX.addEventListener("click", () => {
        if (StatusX.checked) {
            amount++;
        }
        else {
            amount--;
        }
    });
});


verifyButton_Element.addEventListener("click", () => {
    switch (amount) {
        case 0:
            amountText.innerText = "zero książek";
            break;
        case 1:
            amountText.innerText = "jedną książkę";
            break;
        case 2:
            amountText.innerText = "dwie książki";
            break;
        case 3:
            amountText.innerText = "trzy książki";
            break;
        case 4:
            amountText.innerText = "cztery książki";
            break;
        case 5:
            amountText.innerText = "pięć książek";
            break;
        case 6:
            amountText.innerText = "sześć książek";
            break;
        case 7:
            amountText.innerText = "wszystkie książki";
            break;
    }
});
