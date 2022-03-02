$(document).ready(function() {
    //asignar eventos por elemnto, clase (.)y id (#); $("#btn1").evento(function(){ });
    //tipos de funciones

    //efectos
    $("#btn1").click(function() {
        //$("p").hide();
        $("#fx").hide(); //ocultar el elemnto y todo su contenido

    });
    $("#btn2").click(function() {
        $("#fx").show(); //mostrar el elemento y todo su contenido
    });
    $("#btn3").click(function() {
        $("#fx").toggle(); //mostrar u ocultar el elemento y todo su contenido
    });
    $("#btn4").click(function() {
        $("#fx").slideUp();
    });
    $("#btn5").click(function() {
        $("#fx").slideDown();
    });
    $("#btn6").click(function() {
        $("#fx").slideToggle();
    });
    $("#btn7").click(function() {
        $("#fx").fadeOut("slow");
    });
    $("#btn8").click(function() {
        $("#fx").fadeIn("fast");
    });
    $("#btn9").click(function() {
        $("#fx").fadeToggle(4000);
    });

    //estilos (CSS)
    $("#btn10").click(function() {
        $("p").addClass("fs-2 text-danger text-center");
    });
    $("#btn11").click(function() {
        $("p").removeClass("text-danger");
    });
    $("#btn12").click(function() {
        $("p").css("background-color", "blue"); //agrega un atributo CSS
        $("p").css("color", "green");
        $("p").css("width", "300");
        $("p").css("margin", "50px");
    });

    //manipulacion: agregar o eliminar dentro del HTML
    $("#btn13").click(function() {
        $("#fx").after("<p>texto after</p>");
    });
    $("#btn14").click(function() {
        $("#fx").before("<p>texto before</p>");
    });
    $("#btn15").click(function() {
        $("#fx").append("<p>texto append</p>");
    });
    $("#btn16").click(function() {
        $("#fx").prepend("<p>texto prepend</p>");
    });
    $("#btn17").click(function() {
        $("#fx").html(`<div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>`);
    });
    $("#btn18").click(function() {
        let texto = $("p").text(); //extraer todo el texto dentro del parrafo
        alert(texto);
        $("p").text("Hola mundo") //reemplazar el texto del párrafo
    });

    //val captura desde los input, select y text area
    $("#btn19").click(function() {
        let valor = $("#nombre").val(); //capturar lo ingresado
        alert(valor);
        $("#nombre").val("Chao mundo"); //reemplazar el valor del input
    });

    //Eventos
    //.click()
    //.click() hover()



    //fin jquery
});

let box = document.getElementById('box');
box.addEventListener('click', function() {
    alert('click sobre la caja');
});