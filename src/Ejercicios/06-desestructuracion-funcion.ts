/*
    ===== Código de TypeScript =====
*/

export interface Producto {
     desc: string;
     precio: number;
}

const telefono: Producto = {
    desc: 'Samsung S21',
    precio: 1300
}

const tablet: Producto = {
    desc: 'Samsung X',
    precio: 300
}

export function calculaISV( productos: Producto[]): [number, number] {

    let total = 0;

    productos.forEach( ( {precio} ) => {
        total += precio;
    })

    return [total, total *0.15];
}

//const articulos = [ telefono, tablet ];

//const [ total, isv ] = calculaISV(articulos);

//console.log( 'Total:', total )
//console.log( 'IVS:', isv );