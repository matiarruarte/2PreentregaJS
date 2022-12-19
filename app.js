
function registrar(){
    function Cliente(nombre,apellido,dni,telefono,fecha,mesesPagos, vencimientoMembresia){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.telefono=telefono;
        this.fecha=fecha;
        this.mesesPagos=mesesPagos;
        this.vencimientoMembresia=vencimientoMembresia;

    }
    let nombreRegistro = document.getElementById("nombre").value;
    let apellidoRegistro = document.getElementById("apellido").value;
    let dniRegistro = document.getElementById("dni").value;
    let telefonoRegistro = document.getElementById("tel").value;
    let fechaRegistro = document.getElementById("fecha").value;;
    let mesesPagosRegistro = document.getElementById("cantidadMeses").value;
    let vencimientoMembresia = fechaFinal;


nuevoCliente = new Cliente(nombreRegistro,apellidoRegistro,dniRegistro,telefonoRegistro,fechaRegistro, vencimientoMembresia);
console.log(nuevoCliente);
sumaDias(mesesPagosRegistro);
agregar();
}


contadorCliente = 1;

// Sistema para aumentar la membresía.
// 1° establece el dia de la fecha
let momento = moment().format("DD - MM - YYYY");
console.log(momento)

// 2° Función para sumar 1 mes a la membresía
function sumaDias(meses){
    fechaVencimiento = moment().add(meses, 'month')
    fechaFinal = fechaVencimiento.format("DD - MM - YYYY");
    console.log(fechaFinal)
}


document.getElementById("inputFecha").innerHTML = "<input type='text' class='form-control' id='fecha' value='"+momento+"'>"; // "disabled" sin comillas después de value para bloquear la edición del input -------------------------------------------------

let listaClientes = [];
function agregar(){
    listaClientes.push(nuevoCliente);
    console.log(listaClientes);
    document.getElementById("listaDeClientes").innerHTML += "<tr><th scope='row'>"+(contadorCliente++)+"</th><td>"+nuevoCliente.nombre+"</td><td>"+nuevoCliente.apellido+"</td><td>"+nuevoCliente.dni+"</td><td>"+nuevoCliente.telefono+"</td><td>"+nuevoCliente.fecha+"</td><td>FULL</td><td>✔ OK</td><td >"+fechaFinal+"</td><td class='tdcenter'>❌<span></span>🛠</td></tr>";
}

// Buscador de miembros para registrar nuevo pago
const dniEncontrado = listaClientes.some(buscadorDni => nuevoCliente.dni === document.getElementById("dniBuscado").value);
// function buscadorDni(){
//     nuevoCliente.dni === document.getElementById("dniBuscado").value
// }
// console.log(buscadorDni)