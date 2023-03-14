import React from 'react'
import Spendt from './Spendt'

const ListedSpendt = ({ spendt, setEditSpendt, deleteSpendt, filterSpendt, filterS}) => {
    return (
        <div className="listado-gastos contenedor">
            

            { filterS ? 
                <>
                <h2> {filterSpendt.length ? 'Gastos' : 'No hay Gastos en esta categoria'} </h2>

                {filterSpendt.map( (x) => (
                <Spendt x={x} key={x.id} setEditSpendt={setEditSpendt} deleteSpendt={deleteSpendt} />
            ) )}
                </>
            : (
                <>
                    <h2> {spendt.length ? 'Gastos' : 'No hay Gastos aun '} </h2>

                    {spendt.map( (x) => (
                        <Spendt x={x} key={x.id} setEditSpendt={setEditSpendt} deleteSpendt={deleteSpendt} />
                    ) )}
                </>
            ) }

            {  }
        </div>
    )
}

export default ListedSpendt