import {combineReducers} from 'redux'

const equipments = (state = [{name:"Geladeira",potencia:300,horasDia:5},{name:"Fogao",potencia:300,horasDia:5}], action) => {
    switch (action.type) {
      case 'ADD_EQUIPMENT':
        return [
          ...state,
          {
            name: action.name,
            potencia: action.potencia,
            horasDia: action.horasDia
          }
        ]
      default:
        return state
    }
  }


const rootReducer = combineReducers({
    equipments
})

export default rootReducer