var radiologia = [{
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    }
];

var traumatologia = [{
        hora: '08:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }
]

var dental = [{
        hora: '08:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
]

if (radiologia[0].hora == "11:00" && radiologia[4].hora == "16:00") {
    atenciones1.innerHTML = (`Radiología - Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[4].paciente} - ${radiologia[4].prevision}.`)
}
if (traumatologia[0].hora == "08:00" && traumatologia[6].hora == "12:30") {
    atenciones2.innerHTML = (`Traumatología - Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[6].paciente} - ${traumatologia[6].prevision}.`)
}
if (dental[0].hora == "08:30" && dental[5].hora == "14:00") {
    atenciones3.innerHTML = (`Dental - Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[5].paciente} - ${dental[5].prevision}.`)
}

//Tabla Radiología
//Insertar títulos
var titulos = document.getElementById("titulos");
var texto_titulos = "";
for (let clave in radiologia[0]) {
    texto_titulos = texto_titulos + "<th scope='col'>" + clave.toUpperCase() + "</th>";
}
titulos.innerHTML = texto_titulos;

//Insertar valores de filas
var valores = document.getElementById("valores"); //donde escribimos
var texto_valores = ""; //acumuladora = acumuladora + algo
for (let objeto of radiologia) { //valor = objeto
    var valor_fila_td = ""; //Acumuladora interna
    for (let clave in objeto) {
        valor_fila_td = valor_fila_td + "<td>" + objeto[clave] + "</td>"; //objeto[clave] -> obtener el valor
    }
    texto_valores = texto_valores + "<tr>" + valor_fila_td + "</tr>";
}
valores.innerHTML = texto_valores; //insertar en el elemento

//Tabla Traumatologia
//Insertar títulos
var titulos = document.getElementById("titulos2");
var texto_titulos = "";
for (let clave in traumatologia[0]) {
    texto_titulos = texto_titulos + "<th scope='col'>" + clave.toUpperCase() + "</th>";
}
titulos.innerHTML = texto_titulos;

//Insertar valores de filas
var valores = document.getElementById("valores2"); //donde escribimos
var texto_valores = ""; //acumuladora = acumuladora + algo
for (let objeto of traumatologia) { //valor = objeto
    var valor_fila_td = ""; //Acumuladora interna
    for (let clave in objeto) {
        valor_fila_td = valor_fila_td + "<td>" + objeto[clave] + "</td>"; //objeto[clave] -> obtener el valor
    }
    texto_valores = texto_valores + "<tr>" + valor_fila_td + "</tr>";
}
valores.innerHTML = texto_valores; //insertar en el elemento

//Tabla Dental
//Insertar títulos
var titulos = document.getElementById("titulos3");
var texto_titulos = "";
for (let clave in dental[0]) {
    texto_titulos = texto_titulos + "<th scope='col'>" + clave.toUpperCase() + "</th>";
}
titulos.innerHTML = texto_titulos;

//Insertar valores de filas
var valores = document.getElementById("valores3"); //donde escribimos
var texto_valores = ""; //acumuladora = acumuladora + algo
for (let objeto of dental) { //valor = objeto
    var valor_fila_td = ""; //Acumuladora interna
    for (let clave in objeto) {
        valor_fila_td = valor_fila_td + "<td>" + objeto[clave] + "</td>"; //objeto[clave] -> obtener el valor
    }
    texto_valores = texto_valores + "<tr>" + valor_fila_td + "</tr>";
}
valores.innerHTML = texto_valores; //insertar en el elemento