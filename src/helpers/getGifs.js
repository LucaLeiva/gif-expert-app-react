export const getGifs = async(categoria) => {
    const apiKey = "mpz4Gr9PfTjkEzd0mwkICwoOVjBRRj8O";
    const limit = 20;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=${limit}`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}