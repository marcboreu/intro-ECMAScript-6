
// const getImagenPromesa = () => {
//     const promesa = new Promise ( (resolve, reject) => {
//         resolve('http://google.com')
//     })
//     return promesa;
// }

// const getImagenPromesa = () => new Promise ( (resolve) => resolve('http://google.com'));

// getImagenPromesa().then(console.log);


const getImagen = async () => {
    try {

        const apiKey = 'wl3luPcrelqzdXzbZqkW9Y1QEEqBAmRy';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await respuesta.json();
        const {url} = (data.images.original);
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // Manejo de error
        console.error(error);
    }
}

getImagen();
