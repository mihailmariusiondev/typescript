/*
    ===== Código de TypeScript =====
*/

// genericos: son como tipos Any (sin la incertidumbre de que sea CUALQUIERCOSA),
// pero sabiendo de antemano que devuelvo un tipo específico
// If our package (generic) is a string, our delivery should be (return) a string. 
// If our package (generic) it’s a number, our delivery should be (return) a number… and so on.
// https://benmcmahen.com/generics-in-typescript/

function queTipoSoy<T>(argumento: T): string {
    return argumento.toString();
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5]);
let soyExplicito = queTipoSoy<number>(100);