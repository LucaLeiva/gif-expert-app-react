import { useState } from "react"

export const AgregarCategoria = ({onNewCategory}) => {

    // inicio el estado con string vacio porque si no empieza en undefined
    const [inputValor, setInputValor] = useState("");

    const onInputChange = (event) => {
        setInputValor(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // esto es para que no se le pueda dar enter varias veces segudias
        // y que haga cosas raras
        if(inputValor.trim().length === 0) {
            return;
        };

        onNewCategory(inputValor.trim());
        // este es para vaciar el cuadro de texto
        setInputValor("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValor}
                onChange={onInputChange}
            />
        </form>
    )
}