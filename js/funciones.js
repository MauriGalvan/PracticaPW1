$(document).ready(function(){
    $("#home").click(function(){
        $("#series").show();
        $(".listasSeries").show();
        $("#peliculas").show();
        $(".listaPeliculas").show();
    });
    $("#fseries").click(function(){
        $("#peliculas").hide();
        $(".listaPeliculas").hide();
        $("#series").show();
        $(".listasSeries").show();
    });
    $("#fpeliculas").click(function(){
        $("#series").hide();
        $(".listasSeries").hide();
        $("#peliculas").show();
        $(".listaPeliculas").show();
    });

    $("#categorias").change(function(){
        let cat=$(this).val();

        $(".caccion").show();
        $(".cdrama").show();
        $(".cromance").show();
        $(".cficcion").show();
        $(".cterror").show();

        switch (cat){
            case 'terror':
                $(".caccion:not(.cterror)").hide();
                $(".cdrama:not(.cterror)").hide();
                $(".cromance:not(.cterror)").hide();
                $(".cficcion:not(.cterror)").hide();
            break;
            case 'accion':
                $(".cterror:not(.caccion)").hide();
                $(".cdrama:not(.caccion)").hide();
                $(".cromance:not(.caccion)").hide();
                $(".cficcion:not(.caccion)").hide();
            break;
            case 'drama':
                $(".caccion:not(.cdrama)").hide();
                $(".cterror:not(.cdrama)").hide();
                $(".cromance:not(.cdrama)").hide();
                $(".cficcion:not(.cdrama)").hide();
            break;
            case 'romance':
                $(".caccion:not(.cromance)").hide();
                $(".cdrama:not(.cromance)").hide();
                $(".cterror:not(.cromance)").hide();
                $(".cficcion:not(.cromance)").hide();
            break;
            case 'cienciaficcion':
                $(".caccion:not(.cficcion)").hide();
                $(".cdrama:not(.cficcion)").hide();
                $(".cromance:not(.cficcion)").hide();
                $(".cterror:not(.cficcion)").hide();
            break;
            
        }
    });
    $("#cerrarSesion").click(function(){
    
        localStorage.removeItem("usuario");
    })
});
