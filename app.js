const mensajeExito = document.getElementById("mensaje-exito");
const miBoton = document.getElementById("btn-enviar");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const cajaCorreo = document.getElementById("correo");
miBoton.addEventListener("click",function(evento)
{
    evento.preventDefault();
    
    miBoton.style.backgroundColor="#db5622a1";
    mensajeExito.style.color="green";
    mensajeExito.style.backgroundColor="#fcfcfc";
    mensajeExito.style.textAlign="center";
    mensajeExito.style.borderRadius="5px";
    let apellidoEscrito = inputApellido.value;
    let nombreEscrito = inputNombre.value;
    let correoEscrito = cajaCorreo.value;
    if(nombreEscrito ==="" && apellidoEscrito ===""&& correoEscrito === ""){
        alert("¡Por favor ingrese sus datos antes de enviar !")
        return;
            }if (nombreEscrito === ""){
            alert("¡Por favor, escriba su nombre primero! ")
            return;
                }if(apellidoEscrito ===""){
                alert("¡Por favor, escriba su Apellido! ")
                return;
                    }if(correoEscrito ===""){
                    alert("¡Por favor, escriba su Correo! ")
                    return;
                        }if(nombreEscrito !=="" && apellidoEscrito !==""&& correoEscrito !== "") {
                        mensajeExito.innerText = "¡Gracias por contactarme  "+nombreEscrito+" "+apellidoEscrito+"!";
                        return;
                        }
}
);