console.log("Conexion JavasCript")

function inicioSesion(){
    let Username = document.getElementById("Username").value
    let password = document.getElementById("password").value
    const form = document.getElementById("formulario")

    if(Username == "admin" && password == "123"){
        alert("Inicio de sesion exitoso")
        form.reset()
    }
    else{
        alert("Datos invalidos")
    }
}






function validarFormulario(){

///////////////////////////////////////////////////////////////////////////////
    
    let nombre1 = document.getElementById("nombre1").value
    let nombre2 = document.getElementById("nombre2").value
    let apellido1 = document.getElementById("apellido1").value
    let apellido2 = document.getElementById("apellido2").value
    let correo = document.getElementById("correo").value
    let select = document.getElementById("selects").value
    let ciudad = document.getElementById("ciudad").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let codigopostal= document.getElementById("codigopostal").value
    let destino = document.getElementById("destino").value
    const form2 = document.getElementById("formulario")
//////////////////////////////////////////////////////////////////////////////////


    if(nombre1.length == 0){  
        alert('No has escrito una caga en nombre')
    }
    else if (nombre2.length == 0){
        alert('No has escrito nada en el segundo nombre')
    }
    else if(apellido1.length == 0){
        alert('No has escrito nada en el primer apellido')
    }
    else if(apellido2.length == 0){
        alert('No has escrito nada en el segundo apellido')
    }
    else if(correo.length == 0){
        alert('No has escrito nada en el correo')
    }
    else if(select == "Elegir"){
        alert('Favor escoja una opcion distinta de elegir')
    }
    else if(ciudad.length == 0){
        alert('No has escrito nada en el campo ciudad')
    }
    else if(telefono.length == 0){
        alert('No has escrito nada en el campo telefono')
    }
    else if(direccion.length == 0){
        alert('No has escrito nada en el campo direccion')
    }
    else if(codigopostal.length == 0){
        alert('No has escrito nada en el codigo postal')
    }
    else if(destino.length == 0){
        alert('No has escrito nada en destino')
    }
    else{
        let bandera = false, bandera2 = false
        for (let i = 0; i < correo.length; i++) {
            if(correo.charAt(i) == "@"){
                bandera = true                    
            }
            else if(correo.charAt(i) != "" && bandera == true){
                bandera2 = true
            }

            
        }

        if(bandera == false){
            alert("Falta el @ en el correo")
        }
        else if(bandera == true && bandera2 == false){
            alert("Falta colocar texto despues del arroba")
        }
        else{
            console.log("Correo valido")
            alert('Escribiste algo')
            form2.reset()
        }

        
    }
}