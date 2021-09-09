import { Producto, calcularISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }    
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total telefonos', total);
console.log('ISV telefonos', isv);