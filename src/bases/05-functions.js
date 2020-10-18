
//Funciones en JS


// const saludar = function(nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Goku'));

//console.log(saludar);

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABCD123',
    username: 'El_papi1502',
});

const user = getUser();

console.log(user);

// TAREA
// 1.Transformar a arrow function
// 2. Return objeto implicito
// 3. Pruebas

function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    }
};

const getUsuarioActivoArrowFunction = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});


const usuarioActivo = getUsuarioActivo('Pepe');
console.log(usuarioActivo);

console.log(getUsuarioActivoArrowFunction('Marc'));