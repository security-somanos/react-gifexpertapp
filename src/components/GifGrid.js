import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import SingleGif from './SingleGif';
// import getGifs from '../helpers/getGifs';

const GifGrid = ({ category }) => {
  
  const { data:images, loading } = useFetchGifs( category );


  // useEffect( () => {
  //   getGifs( category )
  //     .then( setImgs )
  //     .catch( alert );
  // }, [  category ]);  

  

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
      {loading && 'Cargando...' }
      <div className='card-grid'>
        <ul>
          {
            images.map(({ id, ...img }) => 
              <SingleGif key={id} {...img} />
            )
          }
        </ul>
      </div>
    </>
  )
}

export default GifGrid