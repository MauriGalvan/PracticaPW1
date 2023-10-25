let temporada1 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6"]
let temporada2 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8"]
let temporada3 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8", "Capitulo 9", "Capitulo 10"]
let temporada4 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8", "Capitulo 9", "Capitulo 10", "Capitulo 11", "Capitulo 12"]
let temporada5 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8", "Capitulo 9", "Capitulo 10", "Capitulo 11", "Capitulo 12", "Capitulo 13", "Capitulo 14", "Capitulo 15", "Capitulo 16"]
let temporada6 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8", "Capitulo 9", "Capitulo 10", "Capitulo 11", "Capitulo 12"]
let temporada7 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8", "Capitulo 9", "Capitulo 10"]
let temporada8 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6", "Capitulo 7", "Capitulo 8"]

$(document).ready(function(){
    $("#temporadas").change(function(){
        let temp = $(this).val()
        $("#capitulos").empty()
        switch(temp){
            case "1":
                for(i in temporada1){
                    $("#capitulos").append(`<option value=${i}> ${temporada1[i]}</option>`)
                }
            break;
            case "2":
                for(i in temporada2){
                    $("#capitulos").append(`<option value=${i}> ${temporada2[i]}</option>`)
                }
            break;
            case "3":
                for(i in temporada3){
                    $("#capitulos").append(`<option value=${i}> ${temporada3[i]}</option>`)
                }
            break;
            case "4":
                for(i in temporada4){
                    $("#capitulos").append(`<option value=${i}> ${temporada4[i]}</option>`)
                }
            break;
            case "5":
                for(i in temporada5){
                    $("#capitulos").append(`<option value=${i}> ${temporada5[i]}</option>`)
                }
            break;
            case "6":
                for(i in temporada6){
                    $("#capitulos").append(`<option value=${i}> ${temporada6[i]}</option>`)
                }
            break;
            case "7":
                for(i in temporada7){
                    $("#capitulos").append(`<option value=${i}> ${temporada7[i]}</option>`)
                }
            break;
            case "8":
                for(i in temporada8){
                    $("#capitulos").append(`<option value=${i}> ${temporada8[i]}</option>`)
                }
            break;
        }
    })
})