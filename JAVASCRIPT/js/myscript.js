let estudiantes = ["Edinson", "Jaime", "Isabel", "Israel", "Jose", "Kevin", "Nelson", "Yerkarin"];
console.log(estudiantes);

let vocales = new Array("a", "e", "i", "o", "u");
console.log(vocales);

let arregloVacio = [];
console.log(arregloVacio);

//listas{key: valor}
let = arregloLista = [{ nombre: "Edinson" }, { nombre: "Jaime" }, { nombre: "Isabel" }, { nombre: "Israel" }, { nombre: "Jose" }, { nombre: "Kevin" }, { nombre: "Nelson" }, { nombre: "Yerkarin" }, { nombre: "Patricia" }];
console.log(arregloLista);
console.log(estudiantes[4], arregloLista[4].nombre);

var datosPersonales = ["Jaime", "Tapia", { edad: 45, año_nacimiento: 1976 }, false];
console.log(datosPersonales);

document.write(`Hola ${datosPersonales[0]} ${datosPersonales[1]}`);
document.write("<br>");
document.write(`Naciste el año ${datosPersonales[2].año_nacimiento} y tu edad es ${datosPersonales[2].edad}`);
document.write("<br>");

var animales = ["Perro", "Gato", { ave: "guacamaya" }, 2020, "erizo", { lugar: "Chile", ciudad: "Santiago de Chile" }];

document.write(`Los animales al año ${animales[3]} en ${animales[5].lugar} en la ciudad de ${animales[5].ciudad}
son ${animales[0]} ${animales[1]} más una ${animales[2].ave} y un ${animales[4]}`);

//MATRICES
var matriz3x3 = [
    [1, 2, 3], //posición 0
    [4, 5, 6], //posición 1
    [7, 8, 9] //posición 2
];
console.log(matriz3x3);

// (0,0) (0,1) (0,2)
// (1,0) (1,1) (1,2)
// (2,0) (2,1) (2,2)

console.log(matriz3x3[1][1], matriz3x3[2][1]);

var productos = {
    "productos": [{
            "id": 1,
            "nombre": "Pera",
            "descripcion": "El rincon de Soto",
            "precio": 12.34
        },
        {
            "id": 2,
            "nombre": "Kiwi",
            "descripcion": "Zespri",
            "precio": 2.34
        },
        {
            "id": 3,
            "nombre": null,
            "descripcion": null,
            "precio": null
        },
        {
            "id": 4,
            "nombre": null,
            "descripcion": null,
            "precio": null
        },
        {
            "id": 5,
            "nombre": "Melocotones",
            "descripcion": "Natur",
            "precio": "3.55"
        }
    ]
}
console.clear();
console.log(productos);
console.dir(productos.productos); //variable.clave; retorna un arreglo

//KIWI
console.log(productos.productos[1].nombre) //accedo por posición y clave interna
document.write("<br><br><hr>");

//RECORRER ARREGLOS
for (let i = 0; i < productos.productos.length; i++) {
    document.write(`El id es ${productos.productos[i].id}, `)
    document.write(`el nombre es ${productos.productos[i].nombre}, `)
    document.write(`la descripción es ${productos.productos[i].descripcion}, `)
    document.write(`el precio es ${productos.productos[i].precio}.`)
    document.write("<br><hr>");
}

//FOR...IN (para objetos)
//permite obtener acceso a la clave y de ella al valor
var fruta = {
    "id": 5,
    "nombre": "Melocotones",
    "descripcion": "Natur",
    "precio": "3.55"
}
for (clave in fruta) {
    console.log("clave", clave, "valor", fruta[clave]);
}
for (posicion in estudiantes) {
    console.log("arreglo posicion", posicion, "valor", estudiantes[posicion]); //posiciones
}

//FOR...OF (para arreglos) 
//obtener datos internos del arreglo sin el uso de las posiciones
//no sirve para objetos
for (let valor of estudiantes) {
    console.log("valor", valor);
}
for (const key in datosPersonales) {
    const element = datosPersonales[key];
    console.log(element);
}
for (let posicion in datosPersonales) {
    let elemento = datosPersonales[posicion];
    console.log("elemento", elemento)
    document.write(`elemento ${elemento}, `)
    document.write("<br><hr>");
}