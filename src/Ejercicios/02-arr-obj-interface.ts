/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['bash', 'counter', 'healing'];

// son como clases "tontas", las interfaces no se traducen a JavaScript (no pesa el código)
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);