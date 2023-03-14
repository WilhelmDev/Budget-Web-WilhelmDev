import React from 'react'
import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, validBudget, setValidBudget, spendt, setSpendt}) => {
    return (
        <header>
            <h1> Planificador de Gastos </h1>

            {validBudget ? (
                <ControlBudget
                budget={budget}
                spendt={spendt}
                setSpendt={setSpendt}
                setBudget={setBudget}
                setValidBudget={setValidBudget}
                />
            )
            :(
                <NewBudget
            budget={budget}
            setBudget={setBudget}
            setValidBudget={setValidBudget}
            />
            )
            }
            

        </header>
    )
}

export default Header