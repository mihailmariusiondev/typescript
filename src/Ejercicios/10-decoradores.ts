/*
    ===== Código de TypeScript =====
*/


function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }
  

// los decoradores son funciones que EXPANDEN o AÑADEN funcionalidades a una clase
// se ejecutan ANTES de instanciar la clase
@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);