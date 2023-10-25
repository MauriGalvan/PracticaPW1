function validar(){
  
    var mensaje = "";
    var error = 0;
    var regexcontraseña =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    var regexTarjetaDeCredito=/^.{16,19}$/;
   var regexCodigo = /\d{3}/;

    reset();
    if(!$("#pass").val().match(regexcontraseña)){
        mensaje += "<p>La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.</p>";
        error++;
        $("#pass").addClass('error');
    };
    if($("#pass").val() != $("#rpass").val()){
    mensaje += "<p>Las contraseñas tienen que coincidir</p>";
    error++;
    $("#pass").addClass('error');
    
    };
    if (!($('input[name="mpago"]').is(':checked'))) { /*Si ningun input de name metodoDePago esta seleccionado*/
    mensaje+= "<p>Debe seleccionar un metodo de pago</p>";  
    error++;
   };
 

        if($("#numeroTarjeta").val().length<16 || $("#numeroTarjeta").val().length>19 ){
            mensaje += "<p>El campo tarjeta de crédito solo debe aceptar números con una longitud de entre 16 y 19 dígitos</p>";
            error++;
            $("#numeroTarjeta").addClass('error');
         };


    if(!$("#Ultimosdigitos").val().match(regexCodigo)){
        mensaje += "<p>se pone 3 numeros</p>";
        error++;
        $("#Ultimosdigitos").addClass('error');
        
     };
     
    /* $("#Ultimosdigitos").val(function(){
        localStorage.setItem("cvv", "$('#Ultimosdigitos').val()")
     })
     $("#numeroTarjeta").val(function(){
        localStorage.setItem("nroTarjeta", "$('#numeroTarjeta').val()");
     })*/
     

if(error>0){
    $("#mensaje").append(mensaje);
    return false;
}else{
    return true;
};

};

function reset(){
    $("#pass").removeClass('error');
    $("#Ultimosdigitos").removeClass('error');
    $("#numeroTarjeta").removeClass('error');

    $('input[name="metopago"]').removeClass('error')
    $("#mensaje").empty(); 
};

$(document).ready(function(){
    $("#form").submit(function() {
        return validar();
    });
    $("#pass").keyup(function(){
        validar();
    });
    $('input[name="mpago"]').change(function(){
        validar();
    });
    $("#numeroTarjeta").keyup(function(){
        validar();
    });
    $("#Ultimosdigitos").keyup(function(){
        validar();
    });
    $("#rpass").keyup(function(){
        validar();
    })
});