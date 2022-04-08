const getGifs = async( category ) => {
    
    const apiKey ="IiRSzrHGh0SzQbSZNGJ9FnrmCFHqyceD"
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=8&api_key=${apiKey}`
    
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ({ id, title, images:{downsized_medium:{url}} }) => {
      return {
        id,
        title,
        url,
      }
    });

    return gifs;

};

export default getGifs;