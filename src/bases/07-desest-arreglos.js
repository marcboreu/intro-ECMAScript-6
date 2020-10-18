const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [,,p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();


console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre

const useState = (valor) => {
    // valor = () => {console.log('prueba primera funcion')};
    return [valor, () => {console.log('Hola Mundo')}];
};

// const arr = useState('Goku');

const [nombre, setNombre,] = useState('Goku');

// console.log(arr);

console.log(nombre);
// nombre();
setNombre();


