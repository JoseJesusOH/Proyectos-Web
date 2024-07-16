
var operacion="";
function realizarOperacion() {
    if (operacion == "") {
        alert("Es necesario seleccionar una operación");
    } else {
        let numero1;
        let numero2;
        numero1 = parseFloat(document.getElementById('numero1').value);
        numero2 = parseFloat(document.getElementById('numero2').value);
        let r;
        if (operacion == "Sumar") {
            r = numero1 + numero2;
            limpiarDatos();
            document.getElementById("resultado").value = r;
        }
        else if (operacion == "Restar") {
            r = numero1 - numero2;
            limpiarDatos();
            document.getElementById("resultado").value = r;
        } else if (operacion == "Multiplicar") {
            r = numero1 * numero2;
            limpiarDatos();
            document.getElementById("resultado").value = r;
        } else if (operacion = "Dividir") {
            if (numero2 == 0) {
                alert("No es posible realizar divisiones entre cero");
            } else {
                r = numero1 / numero2
                limpiarDatos();
                document.getElementById("resultado").value = r;
            }
        }
    }

}
function limpiarDatos() {
    operacion = "";
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}
function sumar() {
    auxiliar();

    operacion = "";
    operacion = "Sumar";

}
function restar() {
    auxiliar();

    operacion = "";
    operacion = "Restar";
}
function multiplicar() {
    auxiliar();

    operacion = "";
    operacion = "Multiplicar";
}
function dividir() {
    auxiliar();
    operacion = "";
    operacion = "Dividir";
}
function auxiliar() {
    if (document.getElementById("numero1").value == "") {
        document.getElementById("numero1").value = 0;
    }
    if (document.getElementById("numero2").value == "") {
        document.getElementById("numero2").value = 0;
    }
}