
******************************************************************************************************
* Objetos : es un elemento que se utiliza para hacer colecciones de datos pero todos referidos a lo mismo.. ejemplo Usuario
se define con *CONST Y {}* y se separan los valores con "," y no con ";"
"const objeto = { 
    clave: valor1,  (COMA SOLA)
    clave2: valor2, (puede ser numero, char, string o booleano)
    clave3: valor3  (el ultimo valor no lleva coma)
    };              (*AL FINALIZAR EL ARGUMENTO DEL OBJETO SE CIERRA CON ";"*  )
 const contraseña = clave;
 
****PARA ACCEDER a una clave/propiedad o valor  se puede llamar por puntos o corchetes

 objeto.clave2;        devuelve "valor2"
 objeto['clave3'];     devuelve "valor3"
 objeto["contraseña"]; devuelve "valor1" 
                        *contraseña* es la variable,que hace referencia a la key "clave" y a su valor "valor1" 

******************************************************************************************************

**** PARA EDITAR una clave/propiedad o valor se puede realizar:

  *al declarar el objeto
const usuario = {
    nombre: "Nahuel",
    apellido: "Loscalzo",
    soltero = true
};                   

  *por puntos
usuario.club: "Boca Juniors";       CREA clave/propiedad y valor ("club" y "Boca Juniors")
usuario.soltero;                    devuelve *true*

  *por corchetes
usuario["estudios"] = "en curso";   CREA clave/propiedad y valor ("estudios" y "en curso")

usuario[soltero];                   devuelve *true* porq esta llamando a la var "soltero"   
                                    la cual se definió como *true* antes

usuario["soltero"] = false;         MODIFICA la clave/propiedad "soltero" 

delete usuario.apellido;            BORRA la clave/propiedad "apellido"
delete objeto[unaPropiedad]         BORRA la clave/propiedad "unaPropiedad"

******************************************************************************************************

****METODOS son funciones() pero dentro de objetos{}
    *se definen dentro del objeto*
    const usuario = {
*clave*  saludo: *valor* funcionsaludar()*metodo* { *argumento*
        console.log('Hola a todo el mundo!');
    } *fin argumento*
}
    *se llaman con punto y parentesis  
usuario.funcionsaludar();           devuelve "Hola a todo el mundo!"


******************************************************************************************************
	* Bucle `for…in`
ciclo similar al for, con distinta sintaxis.
se utiliza para recorrer objetos
se recorre clave por clave, en vez de por index como en el for
declarar una variable (para recorrer las claves como si fuera index), "in" y el nombre del objeto. 
Podemos usar esta clave/index, y la notación de corchetes, en nuestro bucle for para acceder al valor asociado con esa clave/index.

const usuario = {
*pos0*    username: 'nahuel.loscalzo',
*pos1*    password: 'contra123',
*pos2*    lovesJavascript: true,
*pos3*    favoriteNumber: 8
};

for (let z in usuario){               z=0 en objeto "usuario{}"
    console.log(z);                   clave en pos0 = "username"  
    console.log(usuario[z]);          valor en pos0 = "nahuel.loscalzo"      
}                                       --------
                                      z=1 en objeto "usuario{}"
                                      clave en pos1 = "password"
                                      valor en pos1 = "contra123"





