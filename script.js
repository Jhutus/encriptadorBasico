const input = document.querySelector("#texto-ingresado");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const mensaje = document.querySelector("#texto-dado");


document.getElementById('btn-encriptar').onclick = (e) => {
    e.preventDefault();
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensaje.value = textoEncriptado;
    tomarTexto();
}

document.getElementById('btn-desencriptar').onclick = (e) => {
    e.preventDefault();
    const textoDesencriptado = desencriptar(input.value);
    mensaje.value = textoDesencriptado;
    tomarTexto();
}

document.getElementById('btn-copiar').onclick = (e) => {
    e.preventDefault();
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

function encriptar(stringEncriptada) {
    let matrixCode = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i <matrixCode.length; i++) {
        if (stringEncriptada.includes(matrixCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i <matrixCode.length; i++) {
        if (stringDesencriptada.includes(matrixCode[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return stringDesencriptada; 
}

function tomarTexto(){
    document.getElementById("").style.display = "block";
}
