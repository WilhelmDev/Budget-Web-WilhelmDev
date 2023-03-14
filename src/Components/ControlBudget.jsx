import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget = ({budget, spendt, setSpendt, setBudget, setValidBudget }) => {
const [avanible, setAvanible] = useState(0)
const [used, setUsed] = useState(0)
const [percentage, setPercentage] = useState(0)


useEffect(() => {
    const totalUsed = spendt.reduce( (acc, x) => x.mount + acc, 0 )
    
    const totalAvanible = budget - totalUsed;
    setAvanible(totalAvanible)
    setUsed(totalUsed)
    //porcentage
    const newPercent = (((totalUsed/budget)*100).toFixed(2))
    setTimeout(() => {
        setPercentage(newPercent)
    }, 850);

}, [spendt])

const formater = (cantidad) => {
    return (cantidad.toLocaleString('es-US',{
        style:'currency',
        currency:'USD'
    })
    )
}

const handleReset = () => {
    const afirmacion = confirm('¿Desea reiniciar presupuesto y gastos?')
    if (afirmacion) {
        setSpendt([]); setBudget(0); setValidBudget(false)
    }
}

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar styles={buildStyles({
                    pathColor: percentage > 100 ? '#dc2626' : '#3b82f6',
                    trailColor: '#f3f3f3',
                    textColor: percentage > 100 ? '#dc2626' : '#3b82f6',

                })}
                value={percentage} 
                text={`${percentage}% Gastado`} minValue={0}/>
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type='button' onClick={handleReset} >
                    Restablecer  Presupuesto
                </button>

                <p>
                    <span> Presupuesto: </span> {formater(budget)}
                </p>
                <p className={`${avanible}` < 0 ? 'negativo' : ''} >
                    <span> Disponible: </span> {formater(avanible)}
                </p>
                <p>
                    <span> Gastado: </span> {formater(used)}
                </p>
                <h5> Coded by: @WilhelmDev </h5>
            </div>
        </div>
    )
}

export default ControlBudget