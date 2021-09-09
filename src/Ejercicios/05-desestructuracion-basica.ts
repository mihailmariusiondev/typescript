/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// otra fora de desestructurar en una sola linea `detalles:{autor}` (más confuso, evitar)
const {volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

// console.log(`El volumen actual de: ${vol}`)
// console.log(`El segundo actual de: ${segundo}`)
// console.log(`La canción actual de: ${cancion}`)
// console.log(`El autor es: ${autor}`)

// ----------- Desestructuración de arreglos o arrays -----------

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [, , trunks] = dbz; //desestructuración posicional

// console.log(`Personaje 1: ${goku}`)
// console.log(`Personaje 2: ${vegeta}`)
console.log(`Personaje 3: ${trunks}`)