import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({categoria}) => {
    
    // custom hook
    const {images, isLoading} = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {
                // tambien se podria hacer un componente de mensaje de carga
                isLoading ? (
                    <h2>Cargando...</h2>
                ) : null
            }
        
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifItem
                            key={img.id}
                            title={img.title}
                            url={img.url}
                        />
                    ))
                }
            </div>
        
        </>
    );
};