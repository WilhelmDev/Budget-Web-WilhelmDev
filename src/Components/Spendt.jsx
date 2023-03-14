import { LeadingActions, SwipeableList, SwipeableListItem, 
SwipeAction, TrailingActions} from "react-swipeable-list";
import 'react-swipeable-list/dist/styles.css'
import { dateType } from '../../Helpers'
import IconEarn from '../img/icono_ahorro.svg';
import IconHouse from '../img/icono_casa.svg';
import IconFood from '../img/icono_comida.svg';
import IconSpendt from '../img/icono_gastos.svg';
import IconHobby from '../img/icono_ocio.svg';
import IconHealth from '../img/icono_salud.svg';
import IconSubs from '../img/icono_suscripciones.svg';

const IconSelect = {
    ahorro: IconEarn ,
    casa: IconHouse ,
    comida: IconFood,
    varios: IconSpendt ,
    ocio: IconHobby ,
    suscripciones: IconSubs,
    Salud: IconHealth,
}

const Spendt = ({x, setEditSpendt, deleteSpendt}) => {
const {nombreN, mount, category, id, date} = x;

const leadingActions= () => (
    <LeadingActions>
        <SwipeAction onClick={() => setEditSpendt(x)}>
        Editar
        </SwipeAction>
    </LeadingActions> 
    )
const trailingActions= () => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => deleteSpendt(id)}
        >
            Borrar
        </SwipeAction>
    </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()} >
                <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img src={IconSelect[category]} alt="Icon Spendt" />

                    <div className="descripcion-gasto">
                        <p className="categoria">{category}</p>
                        <p className="nombre-gasto">{nombreN}</p>    
                        <p className="fecha-gasto"> Agregado:  <span> {dateType(date)} </span> </p>
                    </div>
                </div>

                <p className="cantidad-gasto"> ${mount} </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
        
    )
}

export default Spendt
