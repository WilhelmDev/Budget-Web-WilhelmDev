import React from 'react'

const Filter = ({setFilterS, filterS}) => {
    return (
        <div className="filtros sombra contenedor">
            <form action="">
                <div className="campo">
                    <label htmlFor=""> Filtrar Gastos </label>
                        <select name="filtrado" id="filtrado" value={filterS} onChange={(e) => setFilterS(e.target.value)} >
                            <option value="">-- Todas las Categorias --</option>
                            <option value="ahorro"> Ahorro </option>
                            <option value="casa"> Casa </option>
                            <option value="comida"> Comida </option>
                            <option value="varios"> Gastos Varios </option>
                            <option value="ocio"> Ocio </option>
                            <option value="suscripciones"> Suscripciones </option>
                            <option value="Salud"> Salud </option>
                        </select>
                </div>
            </form>
        </div>
    )
}

export default Filter