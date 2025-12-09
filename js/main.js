const display = document.getElementById('values');
const btns = document.querySelectorAll('.boton');

let result = "";

btns.forEach (btn => {
    btn.addEventListener("click", () => {
        const datos = btn.getAttribute("data-value");

        if (datos === '='){
            try {
                result = eval(result);
                display.value = result;
            }

            catch {
                display.value = "Error";
            }        
        } else if (datos === 'C'){
            result = '';
            display.value = result;
        } else {
            result += datos;
            display.value = result;
            console.log(result);
        }

    })
})