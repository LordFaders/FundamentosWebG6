let perros = [{
        raza: 'Pastor Alemán',
        origen: 'Alemania',
        pelaje: 'Lanudo',
        peso: '33kg',
        edad: 12
    },
    {
        raza: 'Poodle',
        origen: 'Francia',
        pelaje: 'Lanudo',
        peso: '20kg',
        edad: 14
    },
];

function dibujarTabla() {
    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "<h1>Tabla de objeto</h1>";
}