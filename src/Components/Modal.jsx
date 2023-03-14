import { useEffect, useState } from 'react'
import IconClose from '../img/cerrar.svg'
import Message from './Message'

useEffect
const Modal = ({setModal, animarModal, setAnimarModal, saveSpent, editSpendt, setEditSpendt}) => {

    const [nombreN, setNombreN] = useState('')
    const [mount, setMount] = useState(0)
    const [category, setCategory] = useState('')
    const [messageN, setMessageN] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if (Object.keys(editSpendt).length > 0) {
            setNombreN(editSpendt.nombreN)
            setMount(editSpendt.mount)
            setCategory(editSpendt.category)
            setId(editSpendt.id)
            setDate(editSpendt.date)
        }
    
    }, [editSpendt])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombreN === "" || mount <=0 || category === "") {
            setMessageN('Todos los campos son obligatorios')

            setTimeout(() => {
                setMessageN("")
            }, 1500);
            return
        }
        saveSpent({nombreN, mount, category, id, date})
    }

    const closeModal = () => {
        
        setAnimarModal(false)
        setEditSpendt({})
        setTimeout(() => {
            setModal(false)
        }, 400);
    }

        return (
            <div className="modal">
                <div className="cerrar-modal">
                    <img src={IconClose} alt="Close" onClick={closeModal} />
                </div>
                <form action="" onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                    <legend> {editSpendt.category ? 'Editar Gasto' : 'Nuevo Gasto'} </legend>

                    {messageN && <Message tipo="error">{messageN}</Message>}

                    <div className="campo">
                        <label htmlFor="nombre"> Nombre Gasto </label>
                        <input type="text" 
                        placeholder='Añada el nombe del gasto'
                        id='nombre'
                        value={nombreN}
                        onChange={(e) => setNombreN(e.target.value)}
                        />

                        <label htmlFor="cantidad"> Cantidad </label>
                        <input type="number" 
                        placeholder='Añada el monto del gasto: ej. 300'
                        id='nombre'
                        value={mount ? mount : ''}
                        onChange={(e) => setMount(Number(e.target.value))}
                        />

                        <label htmlFor="categoria"> Categoria </label>
                        <select name="" id="categoria" value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                            <option value="">-- Seleccione --</option>
                            <option value="ahorro"> Ahorro </option>
                            <option value="casa"> Casa </option>
                            <option value="comida"> Comida </option>
                            <option value="varios"> Gastos Varios </option>
                            <option value="ocio"> Ocio </option>
                            <option value="suscripciones"> Suscripciones </option>
                            <option value="Salud"> Salud </option>
                        </select>

                        <input type="submit" value={editSpendt.category ? 'Guardar Cambios' : 'Añadir Gasto'} 
                        style={{borderRadius: 5 }} />
                    </div>

                </form>
            </div>
        )
        }

export default Modal