function objetos() {
    var automovil = {
        marca: {
            nombre: 'Mazda',
            origen: 'Japón'
        },
        modelo: '3 sport',
        patente: 'LJKH63',
        color: 'azul',
        kilometraje: 15000,
        usado: false,
        encender: function() {
            alert('automóvil encendido.');
        },
        encender2: function() {
            //alert('automóvil ' + marca.nombre + ' ' + modelo + 'encendido.');
            alert('automóvil ' + this.marca.nombre + ' ' + this.modelo + 'encendido.');
            //impresion: automovil
        }
    };
    console.log(automovil);

    //consultar contenido del atributo
    alert(automovil.marca)
    console.log(automovil.marca);

    //acceder a atributo funcion
    console.log(automovil.encender);

    //ejecutar el atributo funcion del atributo funcion
    console.log(automovil.encender());

    //acceder por medio de corchetes
    console.log(automovil["marca"]);
    console.log(automovil["encender"]());

    //acceder a atributos de objeto interno
    console.log(automovil.marca.nombre);
    console.log(automovil["marca"].nombre);
    console.log(automovil["marca"]["nombre"]);

    //RECORRER for...in
    for (let clave in automovil) {
        console.log(`clave: ${clave}, valor: ${automovil[clave]}`);
    }

    //this: acceder a los atributos del objeto donde está la funcion
    console.log(automovil.encender2());

    //ejercicio this
    //generar el mensaje "El representante del alumno Manuel Perez es María, quien reside en Chile"

    let alumno = {
        representante: {
            nombre: 'Maria',
            edad: 49,
            lugar: {
                pais: 'Chile',
                ciudad: 'Santiago de Chile'
            },
        },
        nombre: 'Manuel',
        apellido: 'Perez',
        peso: '45kg',
        edad: 10,
        amigable: true,
        mensaje: function() {
            alert("El representante del alumno " + this.nombre + " " + this.apellido + " " + "es " + this.representante.nombre + ",  quien reside en " +
                this.representante.lugar.pais)
        }
    }
};

//llamando a la funcion interna la
alumno.mensaje();

function dibujarTabla() {
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
    /*
     //agregar contenido dinamco
     var contenedor = document.getElementById("contenedor");
     contenedor.innerHTML = "<h1>Tabla de objeto</h1>";
     //innerHTML reemplaza TODO el contenido
     contenedor.innerHTML = "<h2>Tabla de objeto h2</h2>"*/

    //TITULOS DINAMICOS
    var titulos = document.getElementById("titulos");

    var texto_titulos = ""; //acumuladora + algo
    for (let clave in perros[0]) { // solo la posicion 0 ya que se repiten
        texto_titulos = texto_titulos + "<th scope = 'col' >" + clave + "< /th>"; //concatenar por cada clave existente
    }
    titulos.innerHTML = texto_titulos; //insertar en el elemento
}