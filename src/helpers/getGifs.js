export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=W4R940t19hRInbyo4NrtWeCALLW1PjZQ&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id, //id para el key
      title: img.title, // titulo para mostralo
      url: img.images.downsized_medium.url //url para mostrar la imagen
    }));
  

    return gifs;
  
  }