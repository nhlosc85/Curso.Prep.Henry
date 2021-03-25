// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
  
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]; //porque el menos uno??

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var resu = [];
  for(var x = 0; x < array.length; x++) {
    resu[x] = array[x] + 1;
  }
  return resu; 
}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let z = 0; z < array.length; z++) {
    if (elemento === array[z]) {
      return true;
    }
  }
  return false;
  
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resu = 0;
  for (let z = 0; z < numeros.length; z++) {
    resu = resu + numeros[z];
    }
  return resu;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itegra (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resu = 0;
  for (let z = 0; z < resultadosTest.length; z++) {
    resu = resu + resultadosTest[z];}
  var promedio = resu / resultadosTest.length;
  return promedio;
  
  //agregarNumeros(resultadosTest) / resultadosTest.length - 1;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var resu = 0;
  for (var z = 0; z < numeros.length; z++) {
    if (numeros[z] > resu) {
      resu = numeros[z];
    }
  }
  return resu;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resu = 1; //porq si multiplico por 0 da 0..
  if (arguments.length === 0){// si la funcion no tiene elementos
    return 0;
  }
  if (arguments.lengt === 1){ // si la funcion solo tiene 1 elemento, esta en la pos [0] 
    return arguments[0];
  }
  for (let z = 0; z < arguments.length; z++) { //
    resu = arguments[z] * resu;    
  }
  return resu;
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0;
  for (let z = 0; z < arreglo.length; z++) {
    if (arreglo[z] > 18){
      cont++
    }
  }
  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  finde = "Es fin de semana";
  laburo = "Es dia Laboral";
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return finde;
    }
  else 
    return laburo;
    
  }
  
 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var x = n.toString()
  if (x.charAt(0) === "9"){
  return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  for (let z = 0; z < arreglo.length - 1; z++) {
    if (arreglo[z] === arreglo[z+1])
    return true;    
  } 
  return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = [];
  for (let z = 0; z < array.length; z++) {
    if (array[z] === "Enero" || array[z] === "Marzo" || array[z] === "Noviembre") {
      nuevoarray.push(array[z]);
    }
  }
  if (nuevoarray.length < 3 ) {
    return "No se encontraron los meses pedidos";
  }
  else {
    return nuevoarray;
  }
}  


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = [];
  for (let z = 0; z < array.length; z++) {
    if (array[z] > 100)
      nuevoarray.push(array[z]);
  }
  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var cont = numero;
  for (var z = 0; z < 10 ; z++) {
    cont = cont + 2;
    if (z === cont) break;
    else{
     array.push(cont);
    }
  }  
  if (z < 10){
    return "Se interrumpió la ejecución";
    }
  else{ 
    return array;
   }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var cont = numero;
  for(var z= 0; z<10; z++) {
    if(z === 5) continue;
    else {
      cont = 2 + cont;
      array.push(cont);
    }
  }
  return array; 
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
