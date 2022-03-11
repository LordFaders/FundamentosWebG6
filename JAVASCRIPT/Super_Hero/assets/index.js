$(document).ready(function() {

    $("form").submit(function(e) {

        e.preventDefault();

        let valueInput = parseInt($("#heroInput").val());

        $.ajax({
            type: "GET",
            url: "https://superheroapi.com/api.php/4905856019427443/" + valueInput,
            dataType: "json",
            success: function(data) {
                console.log(data)
                if (valueInput > 731) {
                    alert("No se encontraron datos, ingrese un número entre 1 y 731")
                } else {
                    console.log(data);

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
                <div>
                <h1 class="titulo ms-5 mb-3">SuperHero Encontrado</h1>  
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imagen}" class="img-fluid rounded-start ms-3" style="margin-top: 40%"alt="SuperHero ${nombre}">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title fw-bold">${nombre}</h3>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Conexiones:</p> ${conexiones}</li>
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Publicado por:</p> ${publicado}</li>
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Ocupación:</p> ${ocupacion}</li>
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Primera Aparición:</p> ${primeraAparicion}</li>
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Altura:</p> ${alturaFeet} - ${alturaMeters}</li>
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Peso:</p> ${pesoPounds} - ${pesoKilos}</li>
                        <li class="list-group-item"><p class="text fw-bold mb-0" style="display: inline-block;">Alianzas:</p> ${alias}</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            `);

                    let estadisticas = [];

                    for (let key in data.powerstats) {
                        if (data.powerstats[key] == null) {
                            $("#heroStats").html(`
                            <div class=container>
                            <h3 class="error d-flex align-items-center mt-5">No existen estadísticas de poderes para este superHero.</h3>
                            </div>
                            `)
                        } else {
                            estadisticas.push({ y: data.powerstats[key], name: key })

                            var chart = new CanvasJS.Chart("heroStats", {
                                exportEnabled: true,
                                animationEnabled: true,
                                title: {
                                    text: `Estadísticas de poder Para ${nombre}`
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
                                    dataPoints: estadisticas
                                }]
                            });
                            chart.render();
                        }

                        function explodePie(e) {
                            if (typeof(e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
                            } else {
                                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
                            }
                            e.chart.render();
                        }
                    }
                }
            }

        })

    })
})