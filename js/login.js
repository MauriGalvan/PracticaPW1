$(document).ready(function(){
    $(".error").hide();
    $(".boton").click(function(){
        let nombre=$("#usuario").val();
        let contra=$("#contraseña").val();
        if(nombre=="" || contra==""){
            $(".error").show();
            return false;
        }else return true;
    });
    let user=$("#usuario").val();
    localStorage.setItem("usuario", user);
});