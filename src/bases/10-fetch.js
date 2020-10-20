
const apiKey = 'wl3luPcrelqzdXzbZqkW9Y1QEEqBAmRy';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then(respuestaLlamadaApeticion => respuestaLlamadaApeticion.json())
    .then(({data}) => {
        const {url} = data.images.original
        // console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    // respuestaLlamadaApeticion.json().then(data => {
    // console.log(respuestaLlamadaApeticion)

    .catch(console.warn);