$(document).ready(function(){
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


});