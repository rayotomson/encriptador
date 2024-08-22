let textarea = "";
let textoIn = "";

function encriptar(){
textoIn = document.getElementById('valorUsuario').value;
console.log(textoIn);
textoIn =encriptarTexto(textoIn);
document.getElementById("imagen").style.display = "none";
asignarTextoElemento('p', textoIn);

}

function desencriptar(){
    textoIn = document.getElementById('valorUsuario').value;
    console.log(textoIn);
    textoIn =desencriptarTexto(textoIn);
    document.getElementById("imagen").style.display = "none";
    asignarTextoElemento('p', textoIn);    
}

function myFunction() {
    document.getElementById("imagen").style.display = "none";
  }

  function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarTexto(textoIn) {
    // Reemplaza cada letra según las reglas especificadas
    let textoEncriptado = textoIn
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    return textoEncriptado;
}

function desencriptarTexto(textoIn) {
    // Reemplaza cada letra según las reglas especificadas
    let textoDesencriptado = textoIn
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
    return textoDesencriptado;
}


