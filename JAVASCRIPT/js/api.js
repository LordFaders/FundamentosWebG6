$(document).ready(function() {
    /* for (let i = 1; i <= 200; i++) {
         $(".container").append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png" > ')
     }*/

    //AJAX para consumir API  $.get(url, function(respuesta){}, formato);
    $.get("https://pokeapi.co/api/v2/pokemon/1", function(respuesta) {
        console.log(respuesta);
        console.log(respuesta.name);
        console.log(respuesta.abilities[1].ability.name); //chlorophyll
        console.log(respuesta.types[0].type.name);
        console.log(respuesta.types[1].type.name);
        console.log(respuesta.types[0].type.name, respuesta.types[1].type.name);
        console.log(respuesta.sprites.front_default);

        /* $(".card img").append()
         $(".card-title").append(respuesta.name);
         $(".list-group-item1").append(respuesta.types[0].type.name);
         $(".list-group-item2").append(respuesta.types[1].type.name);
         $(".list-group-item3").append(respuesta.abilities[1].ability.name);*/

        var habilidades = "";
        for (let i = 0; i < respuesta.abilities.length; i++) {
            habilidades = habilidades + " " + respuesta.abilities[i].ability.name + " ";
        }

        var types = "";
        for (let i = 0; i < respuesta.types.length; i++) {
            types = types + respuesta.types[i].type.name + " ";
        }

        $(".container").append(`
<div class="card" style="width: 18rem;">
  <img src="${respuesta.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${respuesta.name}</h5>
    <p class="card-text">Habilidades: ${habilidades}</p>
    <p class="card-text">Tipos: ${types}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`)

    }, "json");

    //fin query
});