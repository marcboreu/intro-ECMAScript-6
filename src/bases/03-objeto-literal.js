

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5532145,
        lat: 14.3256,
        lng: 46.54564,
    }
};



// console.table(persona);



const persona2 = {...persona};
persona2.nombre = 'Peter';


console.log(persona);
console.log (persona2);