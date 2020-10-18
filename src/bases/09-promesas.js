import { getHeroeById } from './bases/08-imp-exp'


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () =>{
//         // console.log('2 segundos después')
//         // resolve();
//         // Tarea 
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe);
// } )
// .catch( err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    
    return new Promise( (resolve, reject) => {

        setTimeout( () =>{
            const p1 = getHeroeById(id);
            p1 ? resolve(p1) : reject('No se pudo encontrar el heroe');
            // if (p1) {
            //     resolve(p1);
            // } else {
            //     reject('No se pudo encontrar el heroe');
            // }
        }, 2000 )
    });

}

getHeroeByIdAsync(1)
    // .then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    // .catch( error => console.warn(error));
    .catch(console.warn)