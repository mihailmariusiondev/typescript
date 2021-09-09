/*
    ===== Código de TypeScript =====
*/

// Crear propiedades y asignar valores a la clase en una linea 'public' (metodo preferido)
// una interfaz NO proporciona implementación ni inicialización, por eso lo de 'clase tonta'
class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super(nombreReal, 'New York, USA');
    }
}



const ironman = new Heroe('Ironman', 45, 'Tony');
// const spiderman: Personaje2 = {}

console.log(ironman);