import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// un hook no es mas que una funcion
export const useFetchGifs = (categoria) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
        setIsLoading(false);
    }

    // useEffect sirve para disparar efectos secundarios, tal como el cambio de un state
    useEffect(() => {
        // lo primero es la funcion
        getImages();

        // lo segundo es un return que sirve en general para limpiar cosas
        // return

        // lo tercero son las dependencias
    }, [])
    
    
    return {
        images: images,
        isLoading: isLoading
    }
}