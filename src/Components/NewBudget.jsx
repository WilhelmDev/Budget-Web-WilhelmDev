import { useState } from 'react'
import Message from './Message'


const NewBudget = ({ budget, setBudget, setValidBudget}) => {
const [message, setMessage] = useState('')

const handleform = (e) => {
    e.preventDefault()
    if (!budget || budget <= 0) {
        setMessage('No es un presupuesto valido')
        return
    }
    setMessage('')
    setValidBudget(true);
}
    return (
        <div className=' contenedor-presupuesto contenedor sombra'>
            
            <form action="" onSubmit={handleform} className='formulario'>
                <div className="campo">
                    <label htmlFor="budget">
                        Definir Presupuesto
                    </label>
                    <input type="number" name="budget" id='budget'
                    className='nuevo-presupuesto'
                    placeholder='Añade tu Presupuesto'
                    value={budget ? budget : ''}
                    onChange={ (e) => setBudget(Number(e.target.value))}
                    />
                    <input type="submit" value="Añadir" style={{borderRadius: 5 }}/>

                    {message && <Message tipo="error"> {message} </Message>}

                </div>
            </form>

        </div>
    )
}

export default NewBudget