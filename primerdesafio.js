let compra = prompt("Bienvenidos! Ingresa la opcion deseada: \n \n 1- Agenda de viaje \n 2- Servicio de Community Manager \n 3- Servicio de Fotografia y Drone")
let costoAgenda = 500
let costoCMBasico = 500
let costoCMPremium = 2000
let costoFotoBasico = 1500
let costoFotoPremium = 4000

let opcion

while (opcion !==0) {

if (compra == 1) {
    alert("Buena elección. \n Las agendas de viaje cuestan $500")
    let cantidadAgendas = parseInt(prompt("Ingresa la cantidad de agendas que queres!"))
    alert("El monto a abonar es de: " + (costoAgenda * cantidadAgendas) + " pesos argentinos")

} else  if (compra == 2) {
    alert("Tenemos mucho por hacer. \n El servicio basico cuesta $500 y el premium $2000")
    let tipoDeServicio = parseInt(prompt("Ingrese 1 si desea el servicio basico o 2 si desea el premium!"))
        if (tipoDeServicio == 1) {
    alert("El monto a abonar es :" + costoCMBasico + " pesos argentinos")
        } else if (tipoDeServicio == 2) {
        alert("El monto a abonar es: " + costoCMPremium + " pesos argentinos")
        } else if (tipoDeServicio !== 1 || tipoDeServicio !==2) {
        alert("Ingrese una opcion valida")}

} else if (compra == 3) {
    alert("Vas a llevarte un recuerdo unico. El servicio basico cuesta $1500 y el premium $4000")
    let tipoDeServicio = parseInt(prompt("Ingrese 1 si desea el servicio basico o 2 si desea el combo de foto con drone!"))
        if (tipoDeServicio == 1) {
    alert("El monto a abonar es: " + costoFotoBasico + " pesos argentinos")
        } else if (tipoDeServicio == 2) {
        alert("El monto a abonar es: " + costoFotoPremium + " pesos argentinos")
        } else if (tipoDeServicio !== 1 || tipoDeServicio !==2) {
        alert("Ingrese una opcion valida")}

} opcion = parseInt(prompt("Ingrese 1 para seguir comprando o 0 para salir"))
    if (opcion == 1) {
        let compra = prompt("Ingresa la opcion deseada: \n 2- Servicio de Community Manager \n 3- Servicio de Fotografia y Drone")
    } 

}

