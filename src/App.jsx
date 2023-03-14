import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal'
import ListedSpendt from './Components/ListedSpendt'
import {idgenerator} from '../Helpers/index'
import IconNewSpent from './img/nuevo-gasto.svg'
import Filter from './Components/Filter'


function App() {
const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0 )
const [validBudget, setValidBudget] = useState(false)
const [modal, setModal] = useState(false)
const [animarModal, setAnimarModal] = useState(false)
const [spendt, setSpendt] = useState(
  localStorage.getItem('spendts') ? JSON.parse(localStorage.getItem('spendts')) : []
)
const [editSpendt, setEditSpendt] = useState({})
const [filterS, setFilterS] = useState('')
const [filterSpendt, setFilterSpendt] = useState([])

useEffect(() => {
  if (Object.keys(editSpendt).length > 0) {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 250);
  }
}, [editSpendt])

useEffect(() => {
  localStorage.setItem('budget', budget ?? 0)
}, [budget])


useEffect(() => {
  const budgetLocal = Number(localStorage.getItem('budget')) ?? 0
  if (budgetLocal > 0) {
    setValidBudget(true)
  }
}, [])

useEffect(() => {
  localStorage.setItem('spendts', JSON.stringify(spendt) ?? [])
}, [spendt])

useEffect(() => {
  if (filterS) {
    const filtracion = spendt.filter((z) => z.category === filterS)
    setFilterSpendt(filtracion)
  }

}, [filterS])



const handleNewSpent = () => {
  setModal(true)
  setEditSpendt({})

  setTimeout(() => {
    setAnimarModal(true)
  }, 250);
}
const saveSpent = (gastacion) => {
  if (gastacion.id) {
    //updating
    const newspendt = spendt.map((y) => y.id === gastacion.id ? gastacion : y )
    setSpendt(newspendt)
    setEditSpendt({})

    } else {
      //creating
      gastacion.id = idgenerator()
      gastacion.date = Date.now()
      setSpendt([...spendt, gastacion])
    }
  //close modal
  setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 400);
  
}
const deleteSpendt = (id) => {
  const updatedSpendt = spendt.filter((x) => x.id !== id)
  setSpendt(updatedSpendt)
}


  return (
    <div className={ modal ? "fijar" : ""} >
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
        spendt={spendt}
        setSpendt={setSpendt}
      />

      {validBudget && (
        <>
          <main>
            <Filter filterS={filterS} setFilterS={setFilterS} />

            <ListedSpendt spendt={spendt} setEditSpendt={setEditSpendt} filterSpendt={filterSpendt}
            deleteSpendt={deleteSpendt} filterS={filterS} /> 
          </main>

          <div className="nuevo-gasto">
            <img src={IconNewSpent} alt="New Spent" onClick={handleNewSpent} />
          </div>
        </>
      )}

      {modal &&  
      <Modal setModal={setModal} saveSpent={saveSpent} setEditSpendt={setEditSpendt}
      animarModal={animarModal} setAnimarModal={setAnimarModal} editSpendt={editSpendt} /> }

    </div>
  )
}

export default App
