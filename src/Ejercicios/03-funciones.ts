/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// Primero argumentos obligatorios, luego los opcionales '?'
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

// const resultado = multiplicar(5, 0, 10);
// console.log(resultado);

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

// void = retornar nada
function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('untos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();