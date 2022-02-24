// Hacemos console.log para comprobar que este bien linkeado el archivo js

console.log("Desafio - Simulador Interactivo");

let sumaExpensas = ""
let totalExpensas = 0
let expensas = 0
let cantidadExpensas = 0;
let pagarExpensas

// Utilizo una función flecha

const interesesExpensas = (expensas) => {

    if (totalExpensas > 8000) {
        expensas = totalExpensas * 30
        expensas = expensas / 100
        alert("Las expensas ingresadas tendran recargo por intereses (del 30%)")
        return expensas

    } else {
        alert("Las expensas ingresada no tendra recargo por intereses")
        expensas = expensas + totalExpensas
        return expensas
        
    }

}

// Pido montos y los sumo hasta que el usuario escriba "No mas expensas"

while (true) {

    sumaExpensas = prompt("Ingrese el monto de expensas a sumar (recuerde que el monto minimo es $1000) cuando termine de sumar ingrese el texto (No mas expensas).")
    if (sumaExpensas == "No mas expensas") {
        break
    }

    if ( parseInt(sumaExpensas) >= 1000) {
        cantidadExpensas++
        alert(`Ingreso el monto: $${sumaExpensas}.`);
        console.log(`Ingreso el monto: $${sumaExpensas}.`);
        totalExpensas += parseInt(sumaExpensas)
    } else {
        alert("Ingrese un monto mayor o igual a $1000.")
    }

}

// Le aplico la funcion "interesesExpensas" a la variable "totalExpensas"

if (totalExpensas < 8000) {
    totalExpensas = interesesExpensas(expensas)
} else {
    totalExpensas = totalExpensas + interesesExpensas(expensas)
}

// Imprimo el resultado de todo.

alert(`El monto total a pagar es $${totalExpensas}. Usted ingreso ${cantidadExpensas} expensas.`)

console.log(`El monto total a pagar es $${totalExpensas}. Usted ingreso ${cantidadExpensas} expensas.`);

pagarExpensas = prompt("Si desea pagar las expensas ingresadas escriba (Pagar expensas) si deseas no pagar omite este mensaje.")
if (pagarExpensas = "Pagar expensas") {
    alert("Expensas pagadas. Gracias por utilizar nuestros servicios!")
} else {
    alert("Ok! Cuando desees pagar utiliza nuestra pagina!")
}
