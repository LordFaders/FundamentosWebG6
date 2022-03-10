$(document).ready(function() {

    $("form").submit(function(e) {

        e.preventDefault();

        let valueInput = $("#heroInput").val();

        $.ajax({
            type: "GET",
            url: "https://superheroapi.com/api.php/4905856019427443/" + valueInput,
            dataType: "json",
            success: function(data) {

                let imagen = data.image.url
                let nombre = data.name
                let conexiones = data.connections["group-affiliation"]
                let publicado = data.biography.publisher
                let ocupacion = data.work.occupation
                let primeraAparicion = data.biography["first-appearance"]
                let alturaFeet = data.appearance.height["0"]
                let alturaMeters = data.appearance.height["1"]
                let pesoPounds = data.appearance.weight["0"]
                let pesoKilos = data.appearance.weight["1"]
                let alias = data.biography.aliases

                $("#heroInfo").html(`
                <h4 class="text-start ms-5">SuperHero Encontrado</h4>
                <br>
            <div class="card" style="width: 18rem;">
    <img src="${imagen}" class="mg-fluid rounded-start" alt="imagen">
    <div class="card-body">
    <h5 class="card-title">Nombre: ${nombre}</h5>
    <p class="card-text">Conexiones: ${conexiones}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-green">Publicado por: ${publicado}</li>
    <li class="list-group-item">Ocupación: ${ocupacion}</li>
    <li class="list-group-item">Primera Aparición: ${primeraAparicion}</li>
    <li class="list-group-item">Altura: ${alturaFeet},  ${alturaMeters}</li>
    <li class="list-group-item">Peso: ${pesoPounds},  ${pesoKilos}</li>
    <li class="list-group-item">Alias: ${alias}</li>
    </ul>
</div>
            `);
                var chart = new CanvasJS.Chart("chartContainer", {
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: "State Operating Funds"
                    },
                    legend: {
                        cursor: "pointer",
                        itemclick: explodePie
                    },
                    data: [{
                        type: "pie",
                        showInLegend: true,
                        toolTipContent: "{name}: <strong>{y}%</strong>",
                        indexLabel: "{name} - {y}%",
                        dataPoints: [
                            { y: 26, name: "School Aid", exploded: true },
                            { y: 20, name: "Medical Aid" },
                            { y: 5, name: "Debt/Capital" },
                            { y: 3, name: "Elected Officials" },
                            { y: 7, name: "University" },
                            { y: 17, name: "Executive" },
                            { y: 22, name: "Other Local Assistance" }
                        ]
                    }]
                });
                chart.render();



            }
        })
    })
})