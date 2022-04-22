import * as Redux from 'redux'

const initalState = {
  data: [],
  total_cost: 0,
  is_sold: false
}
let newData, total_cost

// Reducer
const reducer = (state = initalState, action) => {

  // reducer controler
  switch (action.type) {
    case 'ADD':
      newData = state.data.concat(Object.assign(action.payload , {orderCount: 1}))
      total_cost = newData.reduce((provious, current) => provious + (current.price * current.orderCount), 0)
      return {
        ...state,
        total_cost,
        data: Array.from(newData)
      }
      
    case 'UPDATE':
        newData = state.data
        newData[action.index].orderCount = action.payload
        total_cost = newData.reduce((provious, current) => provious + (current.price * current.orderCount), 0)
      return {
        ...state,
        total_cost,
        data: newData
      }
      
    case 'REJECT': 
      return initalState

    case 'ACCEPT':
      return {...state, is_sold: true}
    

    default: 
      return state
  }


}

// Store
export const store = Redux.createStore(reducer
  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)