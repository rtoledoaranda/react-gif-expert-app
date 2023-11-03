import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook es una funcion que regresa algo, en este caso, un objeto
export const useFetchGifs = ( category ) => {


    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )
  
    const getImages =async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading( false );
    }
  
    useEffect( () => {
      getImages();
    }, []//si la dependencia esta vacia solo se ejecuta una vez
    )
  

    return {
        images, //es lo mismo que images: images
        isLoading
    }

}



