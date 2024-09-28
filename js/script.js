{
    console.log("Cześć");

    const backgroundChangeButton_Element = document.querySelector(".js-backgroundChangeButton");
    let amount = 0;



    const changeBackgroundColor = () => {
        let body = document.querySelector("body");

        body.classList.toggle("body--darkMode")
        backgroundChangeButton_Element.innerText = body.classList.contains("body--darkMode") ?
            "Wyłącz ciemne tło" : "Włącz ciemne tło";

    };

    const verifyCheckbox = () => {
        const checkboxArray = [
            document.getElementById("status1"), //0
            document.getElementById("status2"), //1
            document.getElementById("status3"), //2
            document.getElementById("status4"), //3
            document.getElementById("status5"), //4
            document.getElementById("status6"), //5
            document.getElementById("status7")  //6
        ];

        checkboxArray.forEach(element => {
            element.addEventListener("click", () => {
                if (element.checked) {
                    amount++;
                }
                else {
                    amount--;
                }
            })
        });
    };

    verifyCheckbox();

    const checkboxStatusTextUpdate = () => {
        let amountText = document.getElementById("amountText");

        switch (amount) {
            case 0:
                return amountText.innerText = "zero książek";

            case 1:
                return amountText.innerText = "jedną książkę";

            case 2:
                return amountText.innerText = "dwie książki";

            case 3:
                return amountText.innerText = "trzy książki";

            case 4:
                return amountText.innerText = "cztery książki";

            case 5:
                return amountText.innerText = "pięć książek";

            case 6:
                return amountText.innerText = "sześć książek";

            case 7:
                return amountText.innerText = "wszystkie książki";
        }
    };


    const init = () => {
        const verifyButton_Element = document.querySelector(".js-verifyButton");

        verifyButton_Element.addEventListener("click", checkboxStatusTextUpdate);
        backgroundChangeButton_Element.addEventListener("click", changeBackgroundColor);
    };

    init();

}