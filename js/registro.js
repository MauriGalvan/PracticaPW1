function validar(){
    var nom = /^[a-zA-Z ]+$/;
    var ape = /^[a-zA-Z ]+$/;
    var mail= /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z ]+$/;
    var nomusu=/^[0-9a-zA-Z ]+$/;
    var rpass =/^(?=.[0-9a-z])(?=.[0-9A-Z])(?=.\d)(?=.[$@$!%?&])([A-Za-z\d$@$!%?&]|[^ ]){1,8}$/;
    var numt= /^[0-9 ]+$/;
    var mensaje= "";
    var error= 0;

    reset();
    if(!$("#nombre").val().match(nom)){
        mensaje+="<p class='error'>El nombre solo puede contener letras.</p>"
        error++;
        $("#nombre").addClass('error');
    }
    if(!$("#apellido").val().match(ape)){
        mensaje+="<p class='error'>El apellido solo puede contener letras.</p>"
        error++;
        $("#apellido").addClass('error');
    }
    if(!$("#mail").val().match(mail)){
        mensaje+="<p class='error'>Debe ser un mail válido.</p>"
        error++;
        $("#mail").addClass('error');
    }
    if(!$("#nombreu").val().match(nomusu)){
        mensaje+="<p class='error'>El nombre de usuario solo puede contener letras y números.</p>"
        error++;
        $("#nombreu").addClass('error');
    }
    if($("#pass").val().match(rpass)){
        mensaje+="<p class='error'>La contraseña debe tener como mínimo 2 letras, 2 números y 2 caracteres especiales.</p>"
        error++;
        $("#pass").addClass('error');
    }
    if($("#pass").val() != $("#rpass").val()){
        mensaje+= "<p>Las contraseñas tienen que coincidir</p>";
        error++;
        $("#pass").addClass('error');
        };
    if(!$("#tarjeta").val().length<16||!$("#tarjeta").val().length>19){
        mensaje += "<p class='error'>El campo tarjeta de crédito debe acepta números con entre 16 y 19 dígitos</p>";
        error++;
        $("#tarjeta").addClass('error');
    };
    if(($("#codt").val()>999 || $("#codt").val()<100) || $("#codt").val()==000){
        mensaje += "<p class='error'>El código de seguridad solo contiene números y no puede ser 000</p>";
        error++;
        $("#codt").addClass('error');
    }     
        if (error>0){
        
            $(".errores").append(mensaje);
            return false;
        }$(".botonv").prop("disabled", false);
}

function reset(){
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#mail").removeClass('error');
    $("#nombreu").removeClass('error');
    $("#pass").removeClass('error');
    $("#rpass").removeClass('error');
    $("#tarjeta").removeClass('error');
    $("#codt").removeClass('error');
    $(".errores").empty();
}

$(document).ready(function(){
    $("#nombre").keyup(function() {
        validar();
    });
    $("#apellido").keyup(function() {
        validar();
    });
    $("#mail").keyup(function() {
        validar();
    });
    $("#nombreu").keyup(function() {
        validar();
    });
    $("#pass").keyup(function() {
        validar();
    });
    $("#rpass").keyup(function() {
        validar();
    });
    $("#tarjeta").keyup(function() {
        validar();
    });
    $("#codt").keyup(function() {
        validar();
    });
});


/* $(document).ready(function(){
    $(".error").hide();
    $(".botonv").prop("disabled", true);
    $("#mail").keyup(function(){
        let email=$("#mail").val();
        let contra=$("#contraseña").val();
        if(email!="" && contra!=""){
            $(".botonv").prop("disabled", false);
        }
    });
    $("#contraseña").keyup(function(){
        let email=$("#mail").val();
        let contra=$("#contraseña").val();
        if(email!="" && contra!=""){
            $(".botonv").prop("disabled", false);
        }
    });
     $(".botonv").click(function(){
        let mail=$("#mail").val();
        let usuario=$("#contraseña").val();
        if(mail=="" || usuario==""){
            $(".error").show();
            return false;
        }else return true;
    });
}); */