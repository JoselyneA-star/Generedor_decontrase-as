let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'ABDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.!@°|#$%&/(=?¡+*() ';
let contrasena = document.getElementById('contrasena');
let messageElement = document.getElementById('message');
function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    if ( numeroDigitado < 8){
        alert("la cantidad de caracteres debe de ser mayor a 8");
    }
    let password = '';
for(let i=0; i < numeroDigitado; i++){ 
    
    let caracteresAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
password+=caracteresAleatorio;
}

contrasena.value = password;
validarContrasena(password);

}
function borrar(){
    cantidad.value = '';
    contrasena.value = '';
 messageElement.textContent = ';'
    messageElement.classList.remove('weak');
    messageElement.classList.remove('strong');

}
function validarContrasena(contrasenaGenerada){
    console.log(contrasenaGenerada);
    let numeros = /\d/;
    let letraMayuscula = /[A-Z]/;
    let validacion= false;

    if(numeros.test(contrasenaGenerada) && letraMayuscula.test(contrasenaGenerada)){
        validacion = true;
    }

    if(validacion){
       messageElement.textContent = 'contraseña fuerte';
       messageElement.classList.remove('weak');
       messageElement.classList.add('strong');

    } else{
        messageElement.textContent = 'contraseña debíl. Debe contener al menos un número y letra mayúscula';
        messageElement.classList.remove('weak');
        messageElement.classList.add('strong');
    }
}