function validarDados() {
    const tecla = (window.event) ? event.keyCode : which;
    if ((tecla == 48 || tecla == 49)) return true;
    else {
        return false;
    }
}

function binToDec() {
    const bin = document.getElementById("binario").value
    const decimal = parseInt(bin, 2);
    const output = document.getElementById("decimal")
    output.value = decimal
}

