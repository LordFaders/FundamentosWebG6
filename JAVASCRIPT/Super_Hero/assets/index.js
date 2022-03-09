$(document).ready(function() {

    $("form").submit(function(e) {

        e.preventDefault();

        let valueInput = $("#heroInput").val();

        $.ajax({
            type: "GET",
            url: "https://superheroapi.com/api/4905856019427443/" + valueInput,
            dataType: "json",
            success: function(data) {

                let imagen = data.image
                let nombre = data.name
                let conexiones = data.connections["group-affiliation"]
                let publicado = data.biography.publisher
                let ocupacion = data.work.ocuppation
                let primeraAparicion = data.biography["first-appearance"]
                let alturaFeet = data.appearance.height["0"]
                let alturaMeters = data.appearance.height["1"]
                let pesoPounds = data.appearance.weight["0"]
                let pesoKilos = data.appearance.weight["1"]
                let alias = data.biography.aliases

                $("#heroInfo").html(`
            <div class="card" style="width: 18rem;">
    <img src="${imagen}" class="card-img-left" alt="imagen">
    <div class="card-body">
    <h5 class="card-title">Nombre: ${nombre}</h5>
    <p class="card-text">Conexiones: ${conexiones}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Publicado por: ${publicado}</li>
    <li class="list-group-item">Ocupación: ${ocupacion}</li>
    <li class="list-group-item">Primera Aparición: ${primeraAparicion}</li>
    <li class="list-group-item">Altura: ${alturaFeet} " " ${alturaMeters}</li>
    <li class="list-group-item">Peso: ${pesoPounds} " " ${pesoKilos}</li>
    <li class="list-group-item">Alias: ${alias}</li>
    </ul>
</div>
            `)
            }
        })
    })
})