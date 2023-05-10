import { useEffect, useState } from "react"

export default function DogPics () {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  const [imageCount, setImageCount] = useState(25);
  const [imageUrl, setImageUrl] = useState('');

  


  useEffect(() => {
    getNewImage( imageCount ).then( setImageUrl );
  }, [imageCount])

  const getNewImage = async( imageCount ) => {
        const result = await fetch( API_URL + imageCount );
        const data = await result.json();
        return data ? data.sprites.front_default : '';
  }
  
  const handleGetNewImage = () => {
    setImageCount( imageCount + 1 );
  }
  
  return (
    <div className='dog-pics'>
      <img src={ imageUrl } />
      <button onClick={ handleGetNewImage }>🐶</button>
    </div>
  )
}
