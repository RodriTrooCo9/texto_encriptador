function encriptar(){
    let texto = document.getElementById('texto').value;
    let titulomensaje = document.getElementById('titulomensaje');
    let parrafo = document.getElementById('parrafo');
    let muneco = document.getElementById('muneco')

    let textoCifrado = texto
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai').
        replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat')

    if(texto.length != 0){
        texto = textoCifrado;
        titulomensaje.textContent = 'texto encriptado con exito';
        parrafo.textContent = '';
        muneco.src =  "./img/encriptado.jpg";
    }else {
        muneco.src = "./img/muñeco.png";
        titulomensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
    }