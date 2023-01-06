import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(["One Punch Man", "Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        if (categorias.includes(newCategory)) {
            return;
        }

        setCategorias([newCategory, ...categorias]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AgregarCategoria 
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gifs */}
            {categorias.map((categoria) => (
                <GifGrid
                    key={categoria}
                    categoria={categoria}
                />
            ))}
                {/* Gif Item */}
        </>
    );
}